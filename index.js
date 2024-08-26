/*
Copyright the eleventy-plugin-fluid copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/eleventy-plugin-fluid/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/eleventy-plugin-fluid/raw/main/LICENSE.md.
*/

import compileSass from "./src/compilers/compile-sass.js";
import eleventyUtils from "@11ty/eleventy-utils";

const fluidSassPlugin = {
    initArguments: {},
    configFunction: function (eleventyConfig, options = {}) {
        options = eleventyUtils.Merge({
            basePath: `./${eleventyConfig.dir.input || "src"}/assets/styles`,
            minify: true,
            sourceMap: false,
            drafts: {
                nesting: true
            },
            browserslist: "> 1%"
        }, options);

        eleventyConfig.addTemplateFormats("scss");
        eleventyConfig.addExtension("scss", {
            outputFileExtension: "css",
            getData: async function () {
                return {
                    eleventyExcludeFromCollections: true
                };
            },
            compile: async function (inputContent, inputPath) {
                return await compileSass(inputContent, inputPath, options, this);
            }
        });
    }
};

export default fluidSassPlugin;
