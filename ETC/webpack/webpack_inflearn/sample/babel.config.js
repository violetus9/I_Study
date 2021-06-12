module.exports = {
  presets: [
    // './my-babel-preset.js'
    ['@babel/preset-env', {
      targets: {
        chrome: '79',  // 크롬 79가 이해하는 코드는 굳이 변환하지 않음
        ie: '11'
      },
      useBuiltIns: 'usage', // 'entry', false
      corejs: {
        version: 2, // 3(latest)
      }
    }]
  ]
}