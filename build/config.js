module.exports = {
  global: {
    autoinstall: true,
    cache: true,
    entryFiles: [ './src/index.html' ],
    logLevel: '3',
    sourceMaps: false,
    staticPath: [ 'static' ],
    target: 'browser',
    throwErrors: false,
  },
  serve: {
    experimentalScopeHoisting: false,
    hmr: true,
    minify: false,
    open: 'firefox',
    outDir: './dist/dev',
    port: 1234,
    production: false,
    proxy: {
      // '/api': {
      //   target: 'http://localhost:8000'
      // }
    },
  },
  watch: {
    experimentalScopeHoisting: false,
    hmr: false,
    minify: false,
    outDir: './dist/dev',
    production: false,
    watch: true,
  },
  build: {
    experimentalScopeHoisting: true,
    hmr: false,
    minify: true,
    outDir: './dist/prod',
    production: true,
    watch: false
  }
}
