# AWS TamperMonkey

A collection of unofficial [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) scripts to make working with [AWS](https://aws.amazon.com) just a little bit easier.

## Available Scripts

* [AWS Inspector](#aws-inspector)
  * [CIS Rule Exclusions](#cis-rule-exclusions)
  * [UI Improvements](#ui-improvements)


## AWS Inspector

### CIS Rule Exclusions

* [Install](https://github.com/lloydpick/aws-tampermonkey/raw/master/inspector/cis-rule-exclusions.user.js)
* [View Code](https://github.com/lloydpick/aws-tampermonkey/blob/master/inspector/cis-rule-exclusions.user.js)

![CIS Rule Exclusions](https://raw.githubusercontent.com/lloydpick/aws-tampermonkey/master/docs/cis-exclusions.png)

There's currently no way to exclude Inspector from running certain rules within the CIS benchmark. So you might have situations where you know you won't ever be compliant, a good example is _Rule 3.3.3 Ensure IPv6 is disabled_. You can use this script to semi-hide it from the Findings panel so you can skip over it when reviewing.

You can control which rules are excluded, the setting for that can be found here...

![CIS Rule Exclusions Settings](https://raw.githubusercontent.com/lloydpick/aws-tampermonkey/master/docs/cis-exclusions-settings.png)

### UI Improvements

* [Install](https://github.com/lloydpick/aws-tampermonkey/raw/master/inspector/ui-improvements.user.js)
* [View Code](https://github.com/lloydpick/aws-tampermonkey/blob/master/inspector/ui-improvements.user.js)

![UI Improvements](https://raw.githubusercontent.com/lloydpick/aws-tampermonkey/master/docs/ui-improvements.png)

The UI makes some strange and odd choices when displaying some of the data again. Changes made...

* Show full dates and time, instead of fluffy dates
* Widen the "Date" column so date is never cropped
* Cut down incredibly wordy text on the "Finding" column so you can always see the most important text for both CVE entries and CIS Benchmark results.
