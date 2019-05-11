const usageCache = [];

module.exports = {
  plugins: {
    autoprefixer: {},
    doiuse: {
      onFeatureUsage: function(usageInfo) {
        if (!usageCache.includes(usageInfo.message)) {
          console.log(`\rdoiuse warning: ${usageInfo.message} (${usageInfo.feature})`);
          usageCache.push(usageInfo.message);
        }
      }
    }
  }
}
