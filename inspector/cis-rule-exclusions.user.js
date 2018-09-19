// ==UserScript==
// @name         AWS Inspector - CIS Rule Exclusions
// @homepageURL  https://github.com/lloydpick/aws-tampermonkey
// @downloadURL  https://github.com/lloydpick/aws-tampermonkey/raw/master/inspector/cis-rule-exclusions.user.js
// @supportURL   https://github.com/lloydpick/aws-tampermonkey/issues
// @version      0.2
// @description  Fades out issues you know about
// @author       Lloyd Pick <lloydpick@gmail.com>
// @match        https://*.console.aws.amazon.com/inspector/home*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

var cisBenchmarkExclusions = [
    "1.1.2",
    "1.1.6",
    "1.1.7",
    "1.1.11",
    "1.1.12",
    "1.1.13",
    "2.2.7",
    "3.3.3",
    "3.4.3",
    "3.6.2",
    "3.6.3",
    "3.6.5",
    "4.2.1.4"
]

function lookForExclusions(node) {
    if (node.text().match(/ ((\d+\.)(\d+\.)?(\d+))/g)) {
        var ruleId = node.text().match(/ ((\d+\.)(\d+\.)?(\d+))/)
        if (cisBenchmarkExclusions.includes(ruleId[1])) {
            node.css("text-decoration", "line-through");
            node.closest(".ui-grid-cells").css("opacity", "0.25");
        }
    }
}

waitForKeyElements(".finding .ui-grid .ui-grid-body .ui-grid-row .col4 .ui-grid-cell-contents", lookForExclusions);
