var path = require('path')

var taskConfig = {
  component: {
    entry: './src/index.js',
    name: 'LayUI',
    dependencies: {
      classnames: 'classnames',
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    less: './style/layui.less'
  },
  alias: {
    'layui': path.resolve(__dirname, './src')
  },
  html: [
    {
      chunks: ['app'],
      template: './examples/src/index.html'
    }
  ],
  example: {
    dist: './examples/dist',
    entry: './examples/src/index.js',
    html: './examples/src/index.html',
    files: [
      './README.md'
    ]
  }
}

module.exports = taskConfig
