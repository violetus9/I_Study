class MyWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap('MyPlugin', stats => {
    //   console.log('MyPlugin: done');
    // })

    compiler.plugin('emit', (compilation, cb) => {
      const source = compilation.assets['main.js'].source();
      compilation.assets['main.js'].source = () => {
        const banner = [
          '/**',
          ' * 이것은 BannerPlugin이 처리한 결과.',
          ' * Build Date: 20201241241231212',
          ' */'
        ].join('\n');
        return banner + '\n\n' + source;
      }
      cb();
    })
  }
}

module.exports = MyWebpackPlugin;