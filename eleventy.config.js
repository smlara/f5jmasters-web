const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // Allow .yml data files (friendlier to edit than JSON) — used for the i18n
  // dictionary (t.yml) and the editions/sponsors lists.
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));

  // Static assets copied as-is to the site root.
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/main.js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
