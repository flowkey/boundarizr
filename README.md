#Boundarizr

Local Development Package for [paullewis/Boundarizr](https://raw.githubusercontent.com/paullewis/Boundarizr)

# Demo

If you're like me, you probably love a good demo. Well, since I don't have one
of _those_ you'll have to make do with this: [an adequate demo of Boundarizr](http://paullewis.github.io/Boundarizr/).

# Right, but what's the deal?

Layout boundaries are able to limit the root and scope of Chrome's layout
operations. This is a small library that highlights elements that can act as
potential layout boundaries in your page's DOM. For more info check out [Wilson Page's intro to Layout Boundaries](http://wilsonpage.co.uk/introducing-layout-boundaries/)

To be a layout boundary, the element must satisfy the following constraints:

* The element is an SVG root (`<svg>`).
* The element is a text or search `<input>` field.

or:

* The element does not have a percentage height value.
* The element does not have an implicit or `auto` height value.
* The element does not have an implicit or `auto` width value.
* The element has an explicit overflow value (`scroll`, `auto` or `hidden`).
* The element is not a descendant of a `<table>` element.
* The element is not set to display `inline` or `inline-block`.

Boundarizr makes use of `window.getMatchedCSSRules()` to determine what was applied to the elements in the DOM. As such, and in given that the rules for layout boundaries are implementation-specific, you should assume this will _only work for Chrome_.

## Usage

You can find a bookmarklet link on this page `/bookmarklet.html` in this repo - just drag that to your
bookmarks in Chrome.
You can include `/js/boundarizr.js` (or .min.js if you prefer) and call `Boundarizr.testCurrentDocument()`.

## API

`Boundarizr` contains the following methods:

* `.testCurrentDocument()` - tests the current DOM, adds the boundaries and shows them.
* `.showBoundaries()` - shows the currently detected boundaries.
* `.hideBoundaries()` - hides the currently detected boundaries.
* `.kill()` - kills and removes Boundarizr.

And you can call individual tests against elements if you like:

* `.tests.isBoundary(elm)`
* `.tests.isSVGRoot(elm)`
* `.tests.isInputTextOrSearch(elm)`
* `.tests.hasPercentageHeight(elm)`
* `.tests.hasEmptyOrAutoHeight(elm)`
* `.tests.hasEmptyOrAutoWidth(elm)`
* `.tests.isNotOverflow(elm)`
* `.tests.isDescendantOfTable(elm)`
* `.tests.isDisplayInlineOrInlineBlock(elm)`

## Tests

Can be found at `/tests/index.html`

## License

Apache 2.0 - See `/LICENSE`

*Please note:* this is not a Google project