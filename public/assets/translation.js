/**
 * This file checks for the configuration and initializes the Google translator on the site.
 * Initializes Google Translate with the default language specified in
 * window.__GOOGLE_TRANSLATION_CONFIG__. If the config object is not
 * present, this function will do nothing.
 */
function TranslateInit() {
    if (!window.__GOOGLE_TRANSLATION_CONFIG__) {
        return;
    }
    new google.translate.TranslateElement({
        pageLanguage: window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage,
    });
}