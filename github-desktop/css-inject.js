/**
  * To apply the theme:
  * 1) Open dev tools with CTRL + SHIFT + I
  * 2) Go the console
  * 3) Paste the following code
  * Note: You may have to do this again whenever Github Desktop updates
  */

var html_file = require("path").join(process.resourcesPath, "app/index.html");
var html = require("fs").readFileSync(html_file, "utf8");
var link_to_inject = '<link href="https://cdn.rawgit.com/Yuudaari/83afaa0e1cf21d6852f5349b10e7eb3a/raw/437fdc42d77d25e4f35b91637ce2396f8efa5547/desktop-dark.css" rel="stylesheet">';
var link_regex = /<link href="https:\/\/cdn\.rawgit\.com\/Yuudaari.*?" rel="stylesheet">/;
html = html.replace(link_regex, "").replace("</head>", `\n${link_to_inject}</head>`);
require("fs").writeFileSync(html_file, html, "utf8");
location.reload();
