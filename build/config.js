module.exports = {
  global: {
    autoinstall: true,
    cache: true,
    entryFiles: [ './src/index.html' ],
    experimentalScopeHoisting: false,
    logLevel: '3',
    sourceMaps: false,
    staticPath: [ 'static' ],
    target: 'browser',
    throwErrors: false,
  },
  serve: {
    hmr: true,
    minify: false,
    open: 'firefox',
    outDir: './dist/dev',
    port: 1234,
    production: false,
  },
  watch: {
    hmr: false,
    minify: false,
    outDir: './dist/dev',
    production: false,
    watch: true,
  },
  build: {
    hmr: false,
    minify: true,
    outDir: './dist/prod',
    production: true,
    watch: false
  }
}
