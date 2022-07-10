const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@assets_images": path.resolve(__dirname, "src/assets/img/"),
      "@assets_js": path.resolve(__dirname, "src/assets/js"),
      "@assets_styles": path.resolve(__dirname, "src/assets/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@app_icons": path.resolve(__dirname, "src/assets/img/App/icons"),
    },
  },
};
