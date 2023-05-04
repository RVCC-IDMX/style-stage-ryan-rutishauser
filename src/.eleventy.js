module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/**/*.scss");
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/**/*.js");
  eleventyConfig.addWatchTarget("./src/**/*.html");
  eleventyConfig.addWatchTarget("./src/**/*.js");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

