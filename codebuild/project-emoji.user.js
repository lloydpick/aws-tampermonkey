// ==UserScript==
// @name         AWS CodeBuild - Project Emoji
// @homepageURL  https://github.com/lloydpick/aws-tampermonkey
// @downloadURL  https://github.com/lloydpick/aws-tampermonkey/raw/master/codebuild/project-emoji.user.js
// @supportURL   https://github.com/lloydpick/aws-tampermonkey/issues
// @version      0.1
// @description  Adds emoji for CodeBuild Projects
// @author       Lloyd Pick <lloydpick@gmail.com>
// @match        https://*.console.aws.amazon.com/codebuild/home*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        GM_registerMenuCommand
// ==/UserScript==

function objectify(array) {
    return array.reduce(function(p, c) {
         p[c[0]] = c[1];
         return p;
    }, {});
}

function checkForEmoji(node) {
    if (projects[node.text()]) {
        node.text(projects[node.text()] + " " + node.text());
    }
}

GM_config.init({
  'id': 'codeBuildEmoji',
  'title': 'CodeBuild Project Emojis',
  'fields': {
    'Combinations': {
      'label': 'Project & Emoji Combinations (line & comma separated)',
      'type': 'textarea',
      'default': ''
    }
  }
});

GM_registerMenuCommand("Set Project Emojis", () => {
    GM_config.open();
});

var settingsRaw = GM_config.get('Combinations');
var settingsParsed = settingsRaw.split("\n").map(item => item.split(","));
var projects = objectify(settingsParsed);

waitForKeyElements("table#builds tr.deployment-group-row [id^=build-project-name-] a", checkForEmoji);
