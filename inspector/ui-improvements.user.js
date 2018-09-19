// ==UserScript==
// @name         AWS Inspector - UI Improvements
// @homepageURL  https://github.com/lloydpick/aws-tampermonkey
// @downloadURL  https://github.com/lloydpick/aws-tampermonkey/raw/master/inspector/ui-improvements.user.js
// @supportURL   https://github.com/lloydpick/aws-tampermonkey/issues
// @version      0.3
// @description  Various UI Improvements
// @author       Lloyd Pick <lloydpick@gmail.com>
// @match        https://*.console.aws.amazon.com/inspector/home*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://cdn.jsdelivr.net/npm/chrono-node@1.3.5/chrono.min.js
// @require      http://momentjs.com/downloads/moment.js
// ==/UserScript==

function adjustDateText(node) {
    var newDate = chrono.parse(node.text().split('(')[0]);
    var newText = moment(newDate[0].start.date()).format("Y-MM-DD H:mm");
    node.text(newText);
}

function adjustFindingText(node) {
    var originalText = node.text()
    var newText = node.text();
    newText = newText.replace('Instance ', '');

    // Clean up the text a little, makes it easier to read
    if (originalText.match(/is not compliant with rule/g)) {
        newText = newText.replace('is not compliant with rule', ' - ');
    }
    else if (originalText.match(/is vulnerable to/g)) {
        newText = newText.replace('is vulnerable to', ' - ');
    }

    node.text(newText);
}

GM_addStyle (`
.finding .col3 { width: 160px !important; }
.finding .ui-grid-header { width: 1498px !important; }
.finding .ui-grid-header-canvas { width: 1498px !important; }
.finding .ui-grid-viewport { width: 1444px !important; }
.finding .ui-grid-canvas { width: 1461px !important; }
`);

waitForKeyElements(".finding .ui-grid .ui-grid-body .ui-grid-row .col3 .ui-grid-cell-contents", adjustDateText);
waitForKeyElements(".finding .ui-grid .ui-grid-body .ui-grid-row .col4 .ui-grid-cell-contents", adjustFindingText);
