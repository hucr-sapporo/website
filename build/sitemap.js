const sm = require('sitemap');
const path = require('path');
const fs = require('fs');
const comsiconfig = require('cosmiconfig');

async function getConfig(bundler) {
  const explorer = comsiconfig('sitemap');
  const found = await explorer.search();

  if (found && found.config) {
    return found.config;
  } else {
    return {};
  }
}

async function generate_sitemap(bundler) {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const bundleDir = bundler.options.outDir || path.dirname(bundler.mainBundle.childBundles.values().next().value.name);
  const distPath = path.join(bundleDir, 'sitemap.xml');

  const config = await getConfig(bundler);
  const sitemap = sm.createSitemap(config);

  fs.writeFileSync(distPath, sitemap.toString());
}

module.exports = (bundler) => {
  bundler.on('bundled', (bundle) => {
    generate_sitemap(bundler, bundle);
  });
};
