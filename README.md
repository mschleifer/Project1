Re-implementation of the Material Components - Web tutorial project ("Shrine")(https://codelabs.developers.google.com/codelabs/mdc-web/index.html) with the current version of Material Components - Web v0.34.1. Original tutorial site is closely, but not perfectly replicated. Summary of some differences and required changes compared to the tutorial with the older version of Material Components - Web:
*Gutters resized in newest mdc-layout-grid; could overwrite but did not
*No header box-shadow; no fixed header top-app-bar available
*mdc-temporary-drawer changed to mdc-drawer/mdc-drawer--temporary
*Recreate mdc-card--title and mdc-card--primary (deprecated in newer versions)
*mdc-top-app-bar__nav-icon::before/after background-colors overwrite mdc-ripple-surface::before/after background color in current version; override this behavior
*Replace mdc-toolbar and co. with mdc-top-app-bar and co.
*Required restyling of logo image; using percents now but logos don't match at phone size (new logo shrinks)