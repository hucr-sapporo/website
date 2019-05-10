const fs = require('fs');
const path = require('path');

async function copyFileImpl(source, target) {
  if (fs.lstatSync(source).isSymbolicLink()) {
    const link = fs.readlinkSync(source);
    fs.symlinkSync(link, target);
  } else {
    fs.copyFileSync(source, target);
  }
  return true;
}

async function copyFile(source, target, update = false) {
  if (fs.existsSync(target)) {
    if (update) {
      const sourceStat = fs.statSync(source);
      const targetStat = fs.statSync(target);
      if (sourceStat.mtime > targetStat.mtime) {
        fs.unlinkSync(target);
        await copyFileImpl(source, target);
      }
    } else {
      console.log(`Target '${target}' already exists. Skipping`);
      return false;
    }
  } else {
    await copyFileImpl(source, target);
  }

  return true;
}

async function copyDir(source, target, update = false) {
  if (fs.existsSync(source)) {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target);
    }

    const files = fs.readdirSync(source);
    for (let file of files) {
      const curSource = path.join(source, file);
      const curTarget = path.join(target, path.basename(curSource));

      if (fs.lstatSync(curSource).isDirectory()) {
        copyDir(curSource, curTarget, update);
      } else {
        copyFile(curSource, curTarget, update);
      }
    }
    return true;
  } else {
    console.log(`Source directory '${source}' does not exist. Skipping.`);
    return false;
  }
}

async function copy_static_files(bundler, bundle) {
  const staticPath = [ 'static' ];

  // main asset and package dir, depending on version of parcel-bundler
  const mainAsset =
    bundler.mainAsset ||                                                // parcel < 1.8
    bundler.mainBundle.entryAsset ||                                    // parcel >= 1.8 single entry point
    bundler.mainBundle.childBundles.values().next().value.entryAsset;   // parcel >= 1.8 multiple entry points

  let pkg;
  if (typeof mainAsset.getPackage === 'function') {                       // parcel > 1.8
    pkg = (await mainAsset.getPackage());
  } else {                                   // parcel <= 1.8
    pkg = mainAsset.package;
  }

  const bundleDir = path.dirname(bundle.name || bundler.mainBundle.childBundles.values().next().value.name);

  for (let dir of staticPath) {
    await copyDir(path.join(pkg.pkgdir, dir), bundleDir, true);
  }
}


module.exports = (bundler) => {
  bundler.on('bundled', (bundle) => {
    copy_static_files(bundler, bundle);
  });
};
