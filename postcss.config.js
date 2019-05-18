const usageCache = [];

let plugins = {
  autoprefixer: {}
}

if (process.env.NODE_ENV === 'production') {
  plugins = Object.assign({}, plugins, {
    doiuse: {
      ignore: ['calc', 'viewport-units'],
      onFeatureUsage: function(usageInfo) {
        if (!usageCache.includes(usageInfo.message)) {
          console.log(`\rdoiuse warning: ${usageInfo.message} (${usageInfo.feature})`);
          usageCache.push(usageInfo.message);
        }
      }
    }
  });
}

module.exports = { plugins }
