// reference: https://parceljs.org/api.html

const config = require('./config');
const path = require('path');

function show_usage() {
  let another_commands = [];

  for (var k in config) {
    if (['global', 'serve', 'build'].indexOf(k) === -1) {
      another_commands.push(k);
    }
  }

  console.error(`
Usage: node index.js [command]

Builtin Commands:
  serve (default): starts a development server
  build          : bundles for production

Another commands:
  ${another_commands.join(', ')}
  `.trim());
  process.exit(1);
}

function get_option(command) {
  let parcel_option = Object.assign({}, config.global, config[command]);

  parcel_option.port = Number(process.env.PORT || parcel_option.port || 1234);
  parcel_option.production = (command == 'build');
  parcel_option.throwErrors = false;
  parcel_option.scopeHoist = parcel_option.hmr ?
    false : (parcel_option.experimentalScopeHoisting || false);
  parcel_option.target = parcel_option.target || 'browser';

  parcel_option.entryFiles = parcel_option.entryFiles.map((v) => { return path.resolve(v); })
  return parcel_option;
}


function main() {
  // parse command line arguments
  const args = process.argv;
  if (args.length > 3) {
    show_usage();
  }
  const cmd = args.length == 2 ? 'serve' : args[2];
  if (!(cmd in config)) {
    if (cmd !== '--help') {
      console.error(`invalid command: '${cmd}'\n`);
    }
    show_usage();
  }

  const parcel_option = get_option(cmd);

  if (parcel_option.production) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'production';
  } else {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  }

  const Bundler = require('parcel-bundler');
  const bundler = new Bundler(parcel_option.entryFiles, parcel_option);

  // additional plugins
  require('./copy_static_files')(bundler);
  require('./clean_dist')(bundler);
  // require('./assets_dist')(bundler);
  
  // assets
  bundler.addAssetType('html', require.resolve('./StaticHTMLAsset'));

  (async function() {
    if (parcel_option.hmr) {
      // lazy load
      const proxy = require('http-proxy-middleware');
      const express = require('express');
      const open = require('open');

      const app = express();

      // proxy settings
      if (parcel_option.proxy) {
        for (let pathname in parcel_option.proxy) {
          app.use(pathname, proxy(parcel_option.proxy[pathname]));
        }
      }

      app.use(bundler.middleware())
      console.log(`server running on http:\/\/localhost:${parcel_option.port}\/`)
      const server = await app.listen(parcel_option.port);

      // open browser
      if (server && parcel_option.open) {
        const url = `http:\/\/localhost:${parcel_option.port}`;
        try {
          await open(url);
        } catch (err) {
          console.error(`Unexpected error while opening in browser: ${parcel_option.open}`);
          console.error(err);
        }
      }
    } else {
      bundler.bundle();
    }
  })();
}

if (require.main === module) {
  main();
}
