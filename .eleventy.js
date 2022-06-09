module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    eleventyConfig.addPassthroughCopy("./src/assets/css");
    eleventyConfig.addWatchTarget("./src/assets/css/");
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    return {
        dir: {
            passthroughFileCopy: true,
            input: "src",
            output: "public",
        },
    };
};