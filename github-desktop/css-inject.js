/**
  * To apply the theme:
  * 1) Open dev tools with CTRL + SHIFT + I
  * 2) Go the console
  * 3) Paste the following code
  * Note: You may have to do this again whenever Github Desktop updates
  */

var html_file = require("path").join(process.resourcesPath, "app/index.html");
var html = require("fs").readFileSync(html_file, "utf8");
var link_to_inject = '<link href="https://cdn.rawgit.com/angusyg/app-config/9fec9d14/github-desktop/angus-dark.css" rel="stylesheet">';
var link_regex = /<link href="https:\/\/cdn\.rawgit\.com\/angusyg.*?" rel="stylesheet">/;
html = html.replace(link_regex, "").replace("</head>", `\n${link_to_inject}</head>`);
require("fs").writeFileSync(html_file, html, "utf8");
location.reload();
