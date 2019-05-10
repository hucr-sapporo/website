const fs = require('fs')
const path = require('path')
const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset')

function shouldIgnore (file) {
  const staticPath = path.join('static', file[0] === '/' ? file.slice(1) : file);
  return fs.existsSync(staticPath);
}

class StaticHTMLAsset extends HTMLAsset {
  // addDependency (name, opts) {
  //   if (!shouldIgnore(opts.resolved)) {
  //     return super.addDependency(name, opts)
  //   }
  // }

  processSingleDependency (p, opts) {
    if (shouldIgnore(p)) return p
    else return super.processSingleDependency(p, opts)
  }
}

module.exports = StaticHTMLAsset
