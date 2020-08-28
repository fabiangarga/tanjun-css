const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "njk",
    "png",
    "jpg",
    "eot",
    "svg",
    "ttf",
    "woff",
    "woff2"
  ]);
};
