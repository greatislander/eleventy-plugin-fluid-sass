/*
Copyright the eleventy-plugin-fluid copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/eleventy-plugin-fluid/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/eleventy-plugin-fluid/raw/main/LICENSE.md.
*/

import test from "ava";
import fs from "node:fs";
import Eleventy from "@11ty/eleventy";

test.before(async function () {
    let elev = new Eleventy();
    await elev.write();
});

test("Builds minified CSS from Sass", async function (t) {
    let sassCss = fs.readFileSync("_site/assets/styles/sass.css", "utf8");
    t.is(sassCss, "a{color:#600}mark{background-color:#f90}");
});
