// Remove "this time search with"
user_pref("browser.search.hiddenOneOffs", "Google,SearX,SearXNG,Whoogle,Amazon.com,Bing,DuckDuckGo,Wikipedia (en),ToS;DR Search,Bookmarks,Tabs,History,Actions");

user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

user_pref("devtools.screenshot.clipboard.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.chrome.enabled", true);

// Disable touch-screen scroll drag
user_pref("apz.overscroll.enabled", false);

// PiP
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);

// Remedy "Firefox can’t establish a connection to the server at localhost"
user_pref("network.dns.disableIPv6", false);

user_pref("devtools.toolbox.zoomValue", 1.1);
user_pref("devtools.toolbox.tabsOrder", "inspector,webconsole,storage,netmonitor,styleeditor,jsdebugger,@react-devtools,@react-devtools");
user_pref("devtools.toolbox.host", "bottom");
user_pref("devtools.toolbox.selectedTool", "webconsole");
user_pref("devtools.cache.disabled", true);
user_pref("devtools.webconsole.input.editorOnboarding", false);
user_pref("devtools.screenshot.clipboard.enabled", true);
user_pref("devtools.screenshot.audio.enabled", false);
user_pref("devtools.responsive.touchSimulation.enabled", true);
user_pref("devtools.responsive.showUserAgentInput", true);
user_pref("devtools.netmonitor.persistlog", true);
user_pref("devtools.inspector.three-pane-enabled", false);
user_pref("devtools.inspector.activeSidebar", "computedview");
user_pref("devtools.dom.enabled", false);
user_pref("devtools.debugger.enabled", false);
user_pref("devtools.command-button-measure.enabled", true);
user_pref("devtools.application.enabled", false);
user_pref("devtools.accessibility.enabled", false);
user_pref("devtools.toolsidebar-width.inspector", 0);

// Show bookmark bar only on new tabs
// user_pref("browser.toolbars.bookmarks.2h2020", true);
user_pref("browser.toolbars.bookmarks.visibility", "newtab");

// Open previous windows and tabs / session restore
user_pref("browser.startup.page", 3);
user_pref("browser.startup.homepage", "");
user_pref("privacy.clearOnShutdown.history", false);

user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);
user_pref("cookiebanners.bannerClicking.enabled", true);

// Don't close extension popups
// user_pref("ui.popup.disable_autohide", true);

// Enable DRM
user_pref("media.eme.enabled", true);

// Disable automatic translation popups
user_pref("browser.translations.automaticallyPopup", false);

// Disable RFP
// Use Canvas Blocker with canvas + audio, rest is unnecessary
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("webgl.disabled", false);

// [1001+2810+2801+2811+2820] Keep site data on shutdown
user_pref("network.cookie.lifetimePolicy", 0);
user_pref("privacy.clearOnShutdown.cache", false);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.offlineApps", false);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("browser.cache.disk.enable", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", false);

user_pref("privacy.cpd.cache", false);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.sessions", false);
user_pref("privacy.cpd.offlineApps", false);
user_pref("privacy.cpd.cookies", false);

user_pref("network.http.referer.XOriginPolicy", 0);

// Proton Enabled #127 || Removed at 97 #328 (Maintained for compatibility with ESR)
user_pref("browser.proton.enabled", true);

// Proton Tooltip
user_pref("browser.proton.places-tooltip.enabled", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Color Mix - 88 Above
user_pref("layout.css.color-mix.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

/* Set ui density
 *  0 - Normal
 *  1 - Compact
 *  2 - Touch
 */
user_pref("browser.uidensity", 0);

// about:home Search Bar - 89 Above
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// Browser Theme Based Scheme - Will be activate 95 Above
// user_pref("layout.css.prefers-color-scheme.content-override", 3);

// Force-enable hardware acceleration
user_pref("layers.acceleration.force-enabled", true);

// Enable Mozilla WebRender - should list "WebRender" under about:support > Graphics > Compositing
user_pref("gfx.webrender.all", true);

// Replicate Chrome behaviour for clipped tabs
user_pref("browser.tabs.tabClipWidth", 83); // 140 default

// Change URL-bar suggestions
user_pref("browser.urlbar.suggest.bestmatch", true);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.remotetab", false);
user_pref("browser.urlbar.suggest.topsites", false);

// Allow searching with keywords
user_pref("keyword.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

// Allow extensions to hide tabs
user_pref("extensions.webextensions.tabhide.enabled", true);

// Disable saving passwords
user_pref("signon.rememberSignons", false);

/* Slow YouTube loading
 *  https://support.mozilla.org/en-US/questions/1168957#answer-995163
 *  https://support.mozilla.org/en-US/kb/quick-fixes-if-your-firefox-slows-down
 */
user_pref("media.cache_readahead_limit", 9999); // 60 default
user_pref("media.cache_resume_threshold", 9999); // 30 default

// Remove window-closing warning
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);

// Always load reader view
user_pref("reader.parse-on-load.force-enabled", true);

// For audio device selector
user_pref("media.setsinkid.enabled", true);

// Make scrolling more like edge
/*
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250); // 120 default, 250
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 450); //1250 default
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450); // 1000 default
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50); // 12 default
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio;0", 4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
// user_pref("mousewheel.min_line_scroll_amount", 22);
// user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
// user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
*/

// Printer Settings Default off
user_pref("print.print_footerleft", "");
user_pref("print.print_footerright", "");
user_pref("print.print_headerleft", "");
user_pref("print.print_headerright", "");

// Always prompt for a container when opening a new tab
// user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

// Use a different search engine in private mode
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);

// Disable always opening download panel
user_pref("browser.download.alwaysOpenPanel", false);

/* 0 for no highlighting
 * 1 for a dotted line
 * 2 for long dots
 * 3 for a single straight line
 * 4 for a double underline
 * 5 for the default squiggly line
 */
user_pref("layout.spellcheckDefault", 0); // Disable spell check
// user_pref("browser.download.folderList", 1);
// user_pref("browser.download.useDownloadDir", false); // Ask where to save files

// Prevent sites from swap out memory when minimized
user_pref("config.trim_on_minimize", false);

user_pref("browser.disableResetPrompt", true);

// Load extension updates in the background
// user_pref("browser.tabs.loadDivertedInBackground", true);

// Disable firefox screenshots
user_pref("extensions.screenshots.disabled", true);

// Sync active theme
user_pref("services.sync.prefs.sync.extensions.activeThemeID", true);

// Privacy
// user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,sync.services.mozilla.com");
user_pref("browser.send_pings", false);
// user_pref("beacon.enabled", false);
user_pref("alerts.useSystemBackend", true);
user_pref("extensions.pocket.enabled", false);
user_pref("ui.key.menuAccessKeyFocuses", false);
user_pref("media.block-autoplay-until-in-foreground", false);
/* The resolver mode.
 *  0 - Off (default). use standard native resolving only (don't use TRR at all)
 *  1 - Reserved (used to be Race mode)
 *  2 - First. Use TRR first, and only if the name resolve fails use the native resolver as a fallback.
 *  3 - Only. Only use TRR, never use the native resolver.
 *  4 - Reserved (used to be Shadow mode)
 *  5 - Off by choice. This is the same as 0 but marks it as done by choice and not done by default.
 */
user_pref("network.trr.mode", 5);
// user_pref("privacy.resistFingerprinting", false); // if disabled, use canvas blocker

// Replicate Chrome's "Not Secure" text on HTTP
user_pref("security.insecure_connection_text.enabled", true);

// Prevent javascript to modify clipboard and rightclick events
// https://jsfiddle.net/runarsf/sz2d3n54/17/show
user_pref("dom.event.clipboardevents.enabled", false);
// user_pref("dom.event.contextmenu.enabled", false);

// ssl security settings
// user_pref("security.ssl3.rsa_des_ede3_sha", false);
// user_pref("security.ssl.require_safe_negotiation", true);
// user_pref("security.ssl.disable_session_identifiers", true);

// privacy
// DNT should be left at browser default.
// user_pref("privacy.donottrackheader.enabled", false);
// // 0 - Consent to being tracked is sent to all websites if privacy.donottrackheader.enabled is set True.
// // 1 - Request not to be tracked is sent to all websites if privacy.donottrackheader.enabled is set True.
// user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.trackingprotection.enabled", true);
// // Enable Tracking Protection in Private Browsing
// user_pref("privacy.trackingprotection.pbmode.enabled", true);
// user_pref("privacy.trackingprotection.cryptomining.enabled", true);
// user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
// user_pref("privacy.userContext.enabled", true);
// user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("privacy.userContext.about_newtab_segregation.enabled", true);

// network
user_pref("network.allow-experiments", false);
// user_pref("network.captive-portal-service.enabled", false);
/* Disable dynamic state partitioning - https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning
 *  0 - Allow all
 *  4 - Only reject trackers (Storage partitioning disabled).
 *  5 - Reject (known) trackers and partition third-party storage.
 */
user_pref("network.cookie.cookieBehavior", 4);

// No more flashbang!
user_pref("browser.display.background_color", "#2B2A33");
user_pref("browser.display.background_color.dark", "#2B2A33");
user_pref("editor.background_color", "#000000");

// https://www.reddit.com/r/firefox/comments/17gwb24/speculative_preload_and_crlite_2_builtin_options
user_pref("network.dns.disablePrefetch", false);
user_pref("network.dns.disablePrefetchFromHTTPS", false);
// user_pref("network.http.referer.spoofSource", true);
// user_pref("network.http.speculative-parallel-limit", 0);
// user_pref("network.predictor.enabled", false);
// user_pref("network.predictor.enable-prefetch", false);
// user_pref("network.prefetch-next", false);

// telemetry
// user_pref("toolkit.telemetry.enabled", false);
// user_pref("toolkit.telemetry.archive.enabled", false);
// user_pref("toolkit.telemetry.bhrPing.enabled", false);
 user_pref("toolkit.telemetry.cachedClientID", "");
// user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
// user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
// user_pref("toolkit.telemetry.server", "");
// user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
// user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
// user_pref("toolkit.telemetry.updatePing.enabled", false);

// Firefox Experiments
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);

// sensors
// user_pref("device.sensors.enabled", true);
// user_pref("device.sensors.ambientLight.enabled", false);
// user_pref("device.sensors.motion.enabled", false);
// user_pref("device.sensors.orientation.enabled", false);
// user_pref("device.sensors.proximity.enabled", false);
// user_pref("dom.battery.enabled", true);
// user_pref("dom.webaudio.enabled", true);

// Draw in Titlebar
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.tabs.inTitlebar",        1); // Nightly, 96 Above

// Re-enable overflow menu for extensions
user_pref("extensions.unifiedExtensions.enabled", false);

// ** Scrolling Settings *******************************************************
// == Only Sharpen Scrolling ===================================================
//         Pref                                             Value      Original
user_pref("mousewheel.min_line_scroll_amount",                 10); //        5
user_pref("general.smoothScroll.mouseWheel.durationMinMS",     80); //       50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); //   "0.25"
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); //    "0.4"

// == Smooth Scroling ==========================================================
// ** Scrolling Options ********************************************************
// based on natural smooth scrolling v2 by aveyo
// this preset will reset couple extra variables for consistency
//         Pref                                              Value                 Original
/*
user_pref("apz.allow_zooming",                               true);            ///     true
user_pref("apz.force_disable_desktop_zooming_scrollbars",   false);            ///    false
user_pref("apz.paint_skipping.enabled",                      true);            ///     true
user_pref("apz.windows.use_direct_manipulation",             true);            ///     true
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);            ///    false
user_pref("general.smoothScroll.currentVelocityWeighting", "0.12");            ///   "0.25" <- 1. If scroll too slow, set to "0.15"
user_pref("general.smoothScroll.durationToIntervalRatio",    1000);            ///      200
user_pref("general.smoothScroll.lines.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.lines.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",    100);            ///      200
user_pref("general.smoothScroll.mouseWheel.durationMinMS",      0);            ///       50
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);            ///      100
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);   ///      120
user_pref("general.smoothScroll.msdPhysics.enabled",                  true);   ///    false
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);   ///     1250
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",     200);   ///     1000
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",         10);   ///       12
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",  "1.20");   ///    "1.3"
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",   1000);   ///     2000
user_pref("general.smoothScroll.other.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.other.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pages.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.pages.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pixels.durationMaxMS",        100);            ///      150
user_pref("general.smoothScroll.pixels.durationMinMS",          0);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMaxMS",    100);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMinMS",      0);            ///      150
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");            ///    "0.4"
user_pref("layers.async-pan-zoom.enabled",                   true);            ///     true
user_pref("layout.css.scroll-behavior.spring-constant",   "250.0");            ///   "250.0"
user_pref("mousewheel.acceleration.factor",                     3);            ///       10
user_pref("mousewheel.acceleration.start",                     -1);            ///       -1
user_pref("mousewheel.default.delta_multiplier_x",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_y",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_z",            100);            ///      100
user_pref("mousewheel.min_line_scroll_amount",                  0);            ///        5
user_pref("mousewheel.system_scroll_override.enabled",       true);            ///     true <- 2. If scroll too fast, set to false
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false); ///     true
user_pref("mousewheel.transaction.timeout",                  1500);            ///     1500
user_pref("toolkit.scrollbox.horizontalScrollDistance",         4);            ///        5
user_pref("toolkit.scrollbox.verticalScrollDistance",           3);            ///        3
*/
