module.exports = {
  ssr: false,
  target: 'static',
  router: {
    base: '/liarsli/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway&display=swap' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** Run ESLint on save
  //   */
  //   extend (config, { isDev, isClient }) {
  //     if (isDev && isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // },
  // generate: {
  //   done(generator){
  //     // Copy dist files to public/_nuxt
  //     if (generator.nuxt.options.dev === false && generator.nuxt.options.mode === 'spa') {
  //       const publicDir = join(generator.nuxt.options.rootDir, 'public', '_nuxt')
  //         removeSync(publicDir) //Clear content from previous builds
  //         copySync(join(generator.nuxt.options.generate.dir, '_nuxt'), publicDir)
  //         copySync(join(generator.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
  //         removeSync(generator.nuxt.options.generate.dir) //Delete 'Dist' folder from Laravel root
  //     }
  //     console.log("After generate dist folder");        
  //   }
  // }
}

