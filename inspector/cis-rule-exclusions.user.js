// ==UserScript==
// @name         AWS Inspector - CIS Rule Exclusions
// @homepageURL  https://github.com/lloydpick/aws-tampermonkey
// @downloadURL  https://github.com/lloydpick/aws-tampermonkey/raw/master/inspector/cis-rule-exclusions.user.js
// @supportURL   https://github.com/lloydpick/aws-tampermonkey/issues
// @version      0.3
// @description  Fades out issues you know about
// @author       Lloyd Pick <lloydpick@gmail.com>
// @match        https://*.console.aws.amazon.com/inspector/home*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        GM_registerMenuCommand
// ==/UserScript==

function lookForExclusions(node) {
    if (node.text().match(/\s[0-9]*(([0-9]+\.)*[0-9]+)/g)) {
        var ruleId = node.text().match(/\s[0-9]*(([0-9]+\.)*[0-9]+)/)
        if (exclusionsArr.includes(ruleId[1])) {
            node.css("text-decoration", "line-through");
            node.closest(".ui-grid-cells").css("opacity", "0.25");
        }
    }
}

GM_config.init({
  'id': 'cisExclusions',
  'title': 'CIS Exclusion Settings',
  'fields': {
    'Exclusions': {
      'label': 'Rule Exclusions (comma separated)',
      'type': 'textarea',
      'default': ''
    }
  }
});

GM_registerMenuCommand("Set CIS Exclusions", () => {
    GM_config.open();
});

var exclusionsRaw = GM_config.get('Exclusions');
var exclusionsArr = exclusionsRaw.split(",").map(item => item.trim());
waitForKeyElements(".finding .ui-grid .ui-grid-body .ui-grid-row .col4 .ui-grid-cell-contents", lookForExclusions);
