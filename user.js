//PLACE IN FIREFOX DIRECTORY!!!






// PREF: Disable GeoIP lookup on your address to set default search engine region
// https://trac.torproject.org/projects/tor/ticket/16254
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.countryCode",						"US");
user_pref("browser.search.region",							"US");
user_pref("browser.search.geoip.url",						"");

// PREF: Set Accept-Language HTTP header to en-US regardless of Firefox localization
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
user_pref("intl.accept_languages",							"en-US, en");


// PREF: Don't use OS values to determine locale, force using Firefox locale setting
// http://kb.mozillazine.org/Intl.locale.matchOS
user_pref("intl.locale.matchOS",							false);

// PREF: Don't use Mozilla-provided location-specific search engines
user_pref("browser.search.geoSpecificDefaults",				false);

// PREF: Do not automatically send selection to clipboard on some Linux platforms
// http://kb.mozillazine.org/Clipboard.autocopy
user_pref("clipboard.autocopy",								false);

// PREF: Prevent leaking application locale/date format using JavaScript
// https://bugzilla.mozilla.org/show_bug.cgi?id=867501
// https://hg.mozilla.org/mozilla-central/rev/52d635f2b33d
user_pref("javascript.use_us_english_locale",				true);

// PREF: Don't trim HTTP off of URLs in the address bar.
// https://bugzilla.mozilla.org/show_bug.cgi?id=665580
user_pref("browser.urlbar.trimURLs",						false);

// PREF: Don't monitor OS online/offline connection state
// https://trac.torproject.org/projects/tor/ticket/18945
user_pref("network.manage-offline-status",					false);




/******************************************************************************
 * SECTION: Extensions / plugins                                              *
 ******************************************************************************/

// PREF: Ensure you have a security delay when installing add-ons (milliseconds)
// http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
// http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
user_pref("security.dialog_enable_delay",			1000);




/******************************************************************************
 * SECTION: Firefox (anti-)features / components                              *                            *
 ******************************************************************************/

// PREF: Disable WebIDE
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
user_pref("devtools.webide.enabled",						false);
user_pref("devtools.webide.autoinstallADBHelper",			false);
user_pref("devtools.webide.autoinstallFxdtAdapters",		false);

// PREF: Disable remote debugging
// https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_Desktop
// https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Advanced_settings
user_pref("devtools.debugger.remote-enabled",				false);
user_pref("devtools.chrome.enabled",						false);
user_pref("devtools.debugger.force-local",					true);


// PREF: Disable Mozilla telemetry/experiments
user_pref("toolkit.telemetry.enabled",						false);
user_pref("toolkit.telemetry.unified",						false);
user_pref("experiments.supported",							false);
user_pref("experiments.enabled",							false);
user_pref("experiments.manifest.uri",						"");

// PREF: Disable sending Firefox crash reports to Mozilla servers
// A list of submitted crash reports can be found at about:crashes
user_pref("breakpad.reportURL",								"");

// PREF: Disable sending reports of tab crashes to Mozilla (about:tabcrashed), don't nag user about unsent crash reports
// https://hg.mozilla.org/mozilla-central/file/tip/browser/app/profile/firefox.js
user_pref("browser.tabs.crashReporting.sendReport",			false);
user_pref("browser.crashReports.unsubmittedCheck.enabled",	false);

// PREF: Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
// https://wiki.mozilla.org/FlyWeb
// https://wiki.mozilla.org/FlyWeb/Security_scenarios
// https://docs.google.com/document/d/1eqLb6cGjDL9XooSYEEo7mE-zKQ-o-AuDTcEyNhfBMBM/edit
// http://www.ghacks.net/2016/07/26/firefox-flyweb
user_pref("dom.flyweb.enabled",								false);

// PREF: Enable Firefox Tracking Protection
// https://wiki.mozilla.org/Security/Tracking_protection
// https://support.mozilla.org/en-US/kb/tracking-protection-firefox
// https://support.mozilla.org/en-US/kb/tracking-protection-pbm
// https://kontaxis.github.io/trackingprotectionfirefox/
// https://feeding.cloud.geek.nz/posts/how-tracking-protection-works-in-firefox/
user_pref("privacy.trackingprotection.enabled",				true);
user_pref("privacy.trackingprotection.pbmode.enabled",		true);

// PREF: Enable hardening against various fingerprinting vectors (Tor Uplift project)
// https://wiki.mozilla.org/Security/Tor_Uplift/Tracking
// https://bugzilla.mozilla.org/show_bug.cgi?id=1333933
//user_pref("privacy.resistFingerprinting",					true);

// PREF: Disable collection/sending of the health report (healthreport.sqlite*)
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
user_pref("datareporting.healthreport.uploadEnabled",		false);
user_pref("datareporting.healthreport.service.enabled",		false);
user_pref("datareporting.policy.dataSubmissionEnabled",		false);

// PREF: Disable Heartbeat  (Mozilla user rating telemetry)
// https://wiki.mozilla.org/Advocacy/heartbeat
// https://trac.torproject.org/projects/tor/ticket/19047
user_pref("browser.selfsupport.url",						"");

// PREF: Disable Firefox Hello (disabled) (Firefox < 49)
// https://wiki.mozilla.org/Loop
// https://support.mozilla.org/t5/Chat-and-share/Support-for-Hello-discontinued-in-Firefox-49/ta-p/37946
// Notice-DISABLED: Firefox Hello requires setting `media.peerconnection.enabled` and `media.getusermedia.screensharing.enabled` to true, `security.OCSP.require` to false to work.
user_pref("loop.enabled",									false);

// PREF: Disable Firefox Hello metrics collection
// https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
user_pref("loop.logDomains",								false);

// PREF: Enable blocking reported web forgeries
// https://wiki.mozilla.org/Security/Safe_Browsing
// http://kb.mozillazine.org/Safe_browsing
// https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
// http://forums.mozillazine.org/viewtopic.php?f=39&t=2711237&p=12896849#p12896849
// CIS 2.3.4
user_pref("browser.safebrowsing.enabled",					false); // Firefox < 50
user_pref("browser.safebrowsing.phishing.enabled",			false); // firefox >= 50
user_pref("browser.safebrowsing.malware.enabled"			false);
user_pref("browser.safebrowsing.updateURL"					"");
user_pref("browser.safebrowsing.appRepURL"					"");
user_pref("browser.safebrowsing.gethashURL"					"");
user_pref("browser.safebrowsing.reportURL"					"");
user_pref("browser.safebrowsing.reportPhishURL"				"");
user_pref("browser.safebrowsing.reportMalwareURL" 			"");
user_pref("browser.safebrowsing.reportMalwareErrorURL" 		"");
user_pref("browser.safebrowsing.reportGenericURL" 			"");
user_pref("browser.safebrowsing.reportErrorURL" 			"");
user_pref("browser.safebrowsing.malware.reportURL" 			"");
user_pref("browser.safebrowsing.id" 						"");

// PREF: Disable Pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
// https://github.com/pyllyukko/user.js/issues/143
user_pref("browser.pocket.enabled",							false);
user_pref("extensions.pocket.enabled",						false);

// PREF: Disable SHIELD
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
user_pref("extensions.shield-recipe-client.enabled",		false);
user_pref("app.shield.optoutstudies.enabled",				false);

// PREF: Disable "Recommended by Pocket" in Firefox Quantum
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories",	false);




/*******************************************************************************
 * SECTION: Caching                                                            *
 ******************************************************************************/

// PREF: Do not download URLs for the offline cache
// http://kb.mozillazine.org/Browser.cache.offline.enable
user_pref("browser.cache.offline.enable",					false);

// PREF: Disable disk cache
// http://kb.mozillazine.org/Browser.cache.disk.enable
user_pref("browser.cache.disk.enable",						false);

// PREF: Disable password manager
// CIS Version 1.2.0 October 21st, 2011 2.5.2
user_pref("signon.rememberSignons",							false);

// PREF: Require manual intervention to autofill known username/passwords sign-in forms
// http://kb.mozillazine.org/Signon.autofillForms
// https://www.torproject.org/projects/torbrowser/design/#identifier-linkability
user_pref("signon.autofillForms",							false);

// PREF: Disable formless login capture
// https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
user_pref("signon.formlessCapture.enabled",					false);

// PREF: Delete temporary files on exit
// https://bugzilla.mozilla.org/show_bug.cgi?id=238789
user_pref("browser.helperApps.deleteTempFileOnExit",		true);

// PREF: Do not create screenshots of visited pages (relates to the "new tab page" feature)
// https://support.mozilla.org/en-US/questions/973320
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.pagethumbnails.capturing_disabled
user_pref("browser.pagethumbnails.capturing_disabled",		true);




/*******************************************************************************
 * SECTION: UI related                                                         *
 *******************************************************************************/

// PREF: Enable insecure password warnings (login forms in non-HTTPS pages)
// https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1319119
// https://bugzilla.mozilla.org/show_bug.cgi?id=1217156
user_pref("security.insecure_password.ui.enabled",			true);

// PREF: Force Punycode for Internationalized Domain Names
// http://kb.mozillazine.org/Network.IDN_show_punycode
// https://www.xudongz.com/blog/2017/idn-phishing/
// https://wiki.mozilla.org/IDN_Display_Algorithm
// https://en.wikipedia.org/wiki/IDN_homograph_attack
// https://www.mozilla.org/en-US/security/advisories/mfsa2017-02/
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.6
user_pref("network.IDN_show_punycode",						true);




/******************************************************************************
 * SECTION: MISC                                                              *
 ******************************************************************************/

//makes google searches english for some reason
user_pref("intl.accept_languages",							"en-us,fr,fr-fr,en");

user_pref("beacon.enabled",									false);

//user_pref("dom.event.contextmenu.enabled", 					false);
user_pref("plugins.enumerable_names",						"");

//geolocation
user_pref("geo.enabled", 									false);
user_pref("geo.wifi.uri",									"");
user_pref("geo.wifi.logging.enabled",						false);

user_pref("browser.send_pings", 							"");
//user_pref("dom.battery.enabled", 							"");
user_pref("media.navigator.enabled", 						false);
user_pref("media.peerconnection.enabled", 					false);

//autoscroll & smooth scroll
user_pref("general.smoothScroll", 							false);
user_pref("general.autoScroll", 							true);
user_pref("mousewheel.min_line_scroll_amount", 				75);

//click url bar to select all (default on windows)
user_pref("browser.urlbar.clickSelectsAll", 				true);
