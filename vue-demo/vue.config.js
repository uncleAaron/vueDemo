module.exports = {
  // from https://webpack.docschina.org/configuration/dev-server/#devserver-proxy
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else {
            const name = req.path
              .split("/api/")[1]
              .split("/")
              .join("_");
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            // 清除缓存
            delete require.cache[require.resolve(`./mock/${name}`)]
            return res.send(result);
          }
        },
      },
    },

  },
};
