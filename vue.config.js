module.exports = {
  //baseUrl: '/pages/',
  //outputDir: 'dist/pages',
  pages: {
    home: {
      entry: 'src/pages/home/main.js',
      template: 'public/index.html',
      filename: 'home/index.html'
    },
    about: {
      entry: 'src/pages/about/main.js',
      template: 'public/index.html',
      filename: 'about/index.html'
    }
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /\/home/, to: 'home/index.html' },
        { from: /\/about/, to: 'about/index.html' }
      ]
    }
  }
}
