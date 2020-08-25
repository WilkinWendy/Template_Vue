const path = require("path");
const webpack = require("webpack");

// eslint-disable-next-line no-unused-vars
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir);
}

// webpack build externals

// vue.config.js
const vueConfig = {
  publicPath: "./",
  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    // if prod is on, add externals
    externals: {},
    // 警告 webpack 的性能提示
    performance: {
      hints: "warning",
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      }
    },
    resolve: {
      alias: {}
    }
  },

  chainWebpack: config => {
    config.resolve.alias.set("@$", resolve("src"));
    config.optimization
      .merge({
        splitChunks: {
          maxInitialRequests: 8,
          cacheGroups: {
            ...[].reduce((r, o, i) => {
              r[o] = {
                name: o,
                test: new RegExp(o),
                chunks: "all",
                priority: 1
              };
              return r;
            }, {})
          }
        }
      })
      .end()
      .module.rule("eslint")
      .use("eslint-loader")
      .tap(options => {
        options.fix = true;
        return options;
      });
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          // 'primary-color': '#477CD4'
          // 'link-color': '#F5222D',
          // 'border-radius-base': '4px'
        },
        // do not remove this line
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    // development server port 8000
    port: 8000,
    proxy: {
      "/api": {
        target: "http://www.test.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
      // '/downloadfile': {
      //   target: 'http://10.128.122.11:8909',
      //   ws: false,
      //   changeOrigin: true
      // }
    }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: true,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
};

module.exports = vueConfig;
