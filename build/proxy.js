const http = require('http');
const getPort = require('get-port');
const logger = require('@parcel/logger');
const connect = require('connect');
const proxy = require('http-proxy-middleware');
const comsiconfig = require('cosmiconfig');

async function getProxy(bundler) {
  const explorer = comsiconfig('proxy');
  const found = await explorer.search();

  if (found && found.config) {
    return found.config;
  } else {
    return {};
  }
}

async function serve(bundler, port, host, useHTTPS = false) {
  const proxy_table = await getProxy(bundler);
  const app = connect();
  
  // proxy settings
  if (proxy_table) {
    for (let pathname in proxy_table) {
      app.use(pathname, proxy(proxy_table[pathname]));
    }
  }
  app.use(bundler.middleware());

  let server = http.createServer(app);

  let freePort = await getPort({port});
  server.listen(freePort, host);

  return new Promise((resolve, reject) => {
    server.on('error', err => {
      console.log(err);
      logger.error(new Error(`Failed to launch server on port ${server.address().port}`));
      reject(err);
    });

    server.once('listening', () => {
      let addon =
        server.address().port !== port
          ? `- ${logger.chalk.yellow(
              `configured port ${port} could not be used.`
            )}`
          : '';

      logger.persistent(
        `Server running at ${logger.chalk.cyan(
          `${useHTTPS ? 'https' : 'http'}://${host || 'localhost'}:${
            server.address().port
          }`
        )} ${addon}`
      );

      resolve(server);
    });
  });
}

module.exports = (bundler) => {
  bundler.serve = async function(port = 1234, https = false, host) {
    bundler.server = await serve(bundler, port, host, https);
    try {
      await bundler.bundle();
    } catch (e) {
      // ignore: server can still work with errored bundler
    }
    return bundler.server;
  }
};
