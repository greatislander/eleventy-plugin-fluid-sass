# eleventy-plugin-fluid-sass

[![License: BSD 3-Clause](https://badgen.net/github/license/fluid-project/eleventy-plugin-fluid-sass/)](https://github.com/fluid-project/eleventy-plugin-fluid-sass/blob/main/LICENSE.md)
[![Latest Release](https://badgen.net/github/release/fluid-project/eleventy-plugin-fluid-sass/)](https://github.com/fluid-project/eleventy-plugin-fluid-sass/releases/latest/)
[![NPM Package](https://badgen.net/npm/v/eleventy-plugin-fluid)](http://npmjs.com/package/eleventy-plugin-fluid)
[![codecov](https://codecov.io/gh/fluid-project/eleventy-plugin-fluid-sass/branch/main/graph/badge.svg?token=ZF3OHK4MUC)](https://codecov.io/gh/fluid-project/eleventy-plugin-fluid)

Eleventy plugin which compiles sass for [Fluid Project](https://fluidproject.org) websites.

## Requirements

- Node >= 20
- Eleventy >= 3.0.0

## Installation

Add `eleventy-plugin-fluid-sass` to your Eleventy-based static site by running:

```bash
npm install --save eleventy-plugin-fluid-sass
```

Then, in your Eleventy configuration file (usually `eleventy.config.js`), load the plugin as follows:

```js
import fluidSassPlugin from "eleventy-plugin-fluid-sass";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(fluidSassPlugin);
};
```

## Usage

`eleventy-plugin-fluid-sass` includes configuration for processing Sass files using [Sass](https://sass-lang.com)
and [LightningCSS](https://lightningcss.dev/).

By default, any Sass files with the `.scss` extension found in the
`./src/assets/styles/` directory or its children will be processed _unless the filename begins with an underscore (`_`)_.

Options for Sass may be modified by passing values when registering `eleventy-plugin-fluid-sass`
in your config:

```diff
import fluidSassPlugin from "eleventy-plugin-fluid-sass";

export default function (eleventyConfig) {
-    eleventyConfig.addPlugin(fluidSassPlugin);
+    eleventyConfig.addPlugin(fluidSassPlugin, {
+        browserslist: '> 1.5%'
+    });
};
```

Default values are as follows:

```js
let options = {
    /* Where should Eleventy look for Sass files to process? */
    basePath: `./${eleventyConfig.dir.input || "src"}/assets/styles`,
    /* See: https://lightningcss.dev/minification.html */
    minify: true,
    /* Not yet supported, see https://github.com/fluid-project/eleventy-plugin-fluid/issues/170 */
    sourceMap: false,
    /* See: https://lightningcss.dev/transpilation.html#draft-syntax */
    drafts: {
        nesting: true
    },
    /* A Browserslist configuration string (see: https://browsersl.ist) */
    browserslist: "> 1%"
};
```

Note that all of these will be passed to LightningCSS, not Sass, with the exception of `basePath`, `enabled`, and `sourceMap`.

If you wish to disable Browserslist altogether, you can pass an empty array (`[]`) to the `browserslist` key.

For more options, see the [Sass](https://sass-lang.com/documentation/) and [LightningCSS docs](https://lightningcss.dev/docs.html).

## Development

### Releasing

This package uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), enforced with
[commitlint](https://commitlint.js.org/). This facilitates releasing new versions of the package via [Release Please](https://github.com/googleapis/release-please).
To cut a release, merge the current [release pull request](https://github.com/google-github-actions/release-please-action#whats-a-release-pr).

This will tag an appropriate [semantic version](https://semver.org) based on the nature of the recent commits to the
project and update [the changelog](CHANGELOG.md).

You will then need to publish the updated version to the [npm registry](http://npmjs.com). This requires an npm account
with appropriate maintainer permissions. To publish the package, run:

```bash
npm publish
```

For more information on publishing to npm, see the [npm publish documentation](https://docs.npmjs.com/cli/publish).

## Third Party Software in `eleventy-plugin-fluid-sass`

`eleventy-plugin-fluid-sass` is based on other publicly available software, categorized by license:

### ISC License

- [eleventy-plugin-lightningcss](https://github.com/5t3ph/eleventy-plugin-lightningcss)
- [eleventy-plugin-sass-lightningcss](https://github.com/5t3ph/eleventy-plugin-sass-lightningcss)
