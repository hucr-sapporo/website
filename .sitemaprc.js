const path = require('path');

function toSnakeCase(str) {
  return str.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "");
}

function mapComponent(component, pathname) {
  if (typeof pathname === 'undefined') {
    pathname = toSnakeCase(component);
  }

  return {
    url: pathname,
    lastmodrealtime: true,
    lastmodfile: path.join(__dirname, `src/components/${component}.vue`)
  }
}

module.exports = {
  hostname: 'http://hucrsapporo.php.xdomain.jp',
  urls: [
    {
      changefreq: 'monthly',
      priority: 1.0,
      ...mapComponent('Home', '/')
    },
    {
      changefreq: 'monthly',
      priority: 0.8,
      ...mapComponent('Activity')
    },
    {
      changefreq: 'yearly',
      priority: 0.8,
      ...mapComponent('Schedule')
    },
    {
      changefreq: 'yearly',
      priority: 0.8,
      ...mapComponent('Contact')
    },
    {
      changefreq: 'yearly',
      priority: 0.3,
      ...mapComponent('PrivacyPolicy')
    },
    {
      changefreq: 'yearly',
      priority: 0.3,
      url: '/secure.php',
      lastmodrealtime: true,
      lastmodfile: path.join(__dirname, 'static/secure.php'),
    },
  ]
}
