const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');

module.exports = (bundler) => {
  const bundleDir = bundler.options.outDir || path.dirname(bundler.mainBundle.childBundles.values().next().value.name);

  try {
    if (fs.statSync(bundleDir).isDirectory()) {
      rimraf.sync(`${bundleDir}/{*,.*}`);
    }   
  } catch (err) {}
};
