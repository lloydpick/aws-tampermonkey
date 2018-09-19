# CIS Rule Exclusions

* [Install](https://github.com/lloydpick/aws-tampermonkey/raw/master/inspector/cis-rule-exclusions.user.js)
* [View Code](https://github.com/lloydpick/aws-tampermonkey/blob/master/inspector/cis-rule-exclusions.user.js)

![CIS Rule Exclusions](https://raw.githubusercontent.com/lloydpick/aws-tampermonkey/master/docs/cis-exclusions.png)

There's currently no way to exclude Inspector from running certain rules within the CIS benchmark. So you might have situations where you know you won't ever be compliant, a good example is _Rule 3.3.3 Ensure IPv6 is disabled_. You can use this script to semi-hide it from the Findings panel so you can skip over it when reviewing.

You can control which rules are excluded, the setting for that can be found here...

![CIS Rule Exclusions Settings](https://raw.githubusercontent.com/lloydpick/aws-tampermonkey/master/docs/cis-exclusions-settings.png)
