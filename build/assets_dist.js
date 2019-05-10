const fs = require('fs')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production';

function get_new_filename(filename) {
  if (filename.startsWith('fa-')) {
    return path.join('fonts', filename);
  }

  switch (path.extname(filename).slice(1)) {
    case 'html':
      return filename;
    case 'js':
      return path.join('js', filename);
    case 'css':
      return path.join('css', filename);
    case 'jpg':
    case 'png':
    case 'gif':
      return path.join('img', filename);
    case 'woff':
    case 'woff2':
    case 'eot':
    case 'ttf':
      return path.join('fonts', filename);
    default:
      return path.join('misc', filename);
  }
}

async function replace_in_file(filename, replaceMap = new Map()) {
  let data = fs.readFileSync(filename, 'utf8');
 
  for (var [key, map] of replaceMap) {
    data = data.replace(key, map);
  }

  fs.writeFileSync(filename, data, 'utf8');

  return true;
}

module.exports = bundler => {
  bundler.on('bundled', bundle => {
    if (!isProduction) return;
    const assets_extensions = [ 'html', 'js', 'css', 'json', 'xml', 'yaml', 'toml' ];
    const { outDir } = bundle.entryAsset.options;

    for (var dirname of ['js', 'css', 'img', 'fonts', 'misc']) {
      const assetsOutDir = path.join(outDir, dirname);
      if (!fs.existsSync(assetsOutDir)) {
        fs.mkdirSync(assetsOutDir);
      }
    }

    var replaceMap = new Map();

    const moveAssets = childBundles => {
      if (!childBundles) return;

      for (let b of childBundles.values()) {
        const basename = path.basename(b.name);

        const newfile = get_new_filename(basename);

        if (basename !== newfile) {
          replaceMap.set(
            new RegExp('\\b(' + basename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b'),
            newfile);
          fs.renameSync(b.name, path.join(outDir, newfile));
          b.name = path.join(outDir, newfile);
        }

        moveAssets(b.childBundles);
      }
    };

    const replaceAssets = childBundles => {
      if (!childBundles) return;

      for (let b of childBundles.values()) {
        if (path.extname(b.name).toLowerCase() in assets_extensions) {
          replace_in_file(b.name, replaceMap);
          replaceAssets(b.childBundles, replaceMap);
        }
      }
    };

    moveAssets(bundle.childBundles);
    replaceAssets(bundle.childBundles);
    replace_in_file(bundle.name, replaceMap);
  });
}
