module.exports = function (eleventyConfig) {
  // assets klasörünü (css, fontlar, js) hiç dokunmadan, olduğu gibi çıktıya kopyala
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    // .njk dosyaları varsayılan olarak nunjucks ile işlenir
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
