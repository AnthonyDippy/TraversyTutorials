# bootstrap-crash-course

Traversy Media Bootstrap Tutorial - https://youtu.be/5GcQtLDGXy8

***

## [Bootstrap](https://getbootstrap.com/)

- Front-End framework for UIs and themes
- Created by a designer/developer at Twitter
- HTML / CSS / JavaScript
- Used for building responsive, mobile first web applications and websites
- Most popular framework by far

## Why Use Bootstrap

- Increase development speed
- Responsiveness
- Consistency
- Customizable
- Support

## HTML / CSS Components

- Navbar & Dropdowns
- Jumbotron
- Alerts & Progress Bars
- Form & Input
- Buttons & Links
- Labels & Badges
- Icons
- List Groups
- Wells & Panels
- Pagination
- Tables
- Grid System
- Responsive Utilities

## JavaScript Widgets & Helpers

- Transitions
- Modals
- Dropdowns
- Tabs
- Carousel/Slider
- Alerts
- Popovers
- Tooltips
- Collapsible Elements

## Installation / Setup

- Manually Download Source Files (CSS/JS)
- Content Delivery Network (CDN)
- Bower
- NPM

jQuery is **required** for all JavaScript widgets

## [New to Bootstrap 4](https://getbootstrap.com/docs/4.3/migration/)

### Sass

- Moved from Less to Sass
- CSS Pre-Compiler
- As of v3 a Sass port was created and maintained
- Sass is favored in the web dev community
- Use of Libsass to compile faster

### Button Styles & Flat Design

- Flat style over gradient
- More subtle look
- .btn-outline-* class

### Grid System & Layout

- Changes in the underlying architecture
- rem & em units instead of pixels
- New -xl tier for extra large screens
- Grid now uses **flexbox**
- .offset-md-4 instead of .col-offset-md-4

### Flexbox

- Includes flexbox Utilities
- Use flexbox to manage grid columns, navigation, components and More
- Display utilities can transform children items into flex items
- .d-flex and .d-inline-flex
- `<div class="d-flex p-2">I'm a flexbox container!</div>`

### Cards

- Cards replace panels, wells, and thumbnails
- Uses flexbox
- Get same behavior with modifiers
- As little markup as possible
- .card-block instead of .well
- Use .card-title for titles
- Image headings

### Responsive Floats

- Easily float elements based on grid tier
- No need for custom media queries
- Class examples
  - .float-md-right
  - .float-lg-left
  - .float-sm-right
- New spacing utility class available

### Navbar

- Flat designer
- Uses flexbox instead of floats
- No longer requires the .nav base class
- .navbar-toggleable classes are now applied to .navbar

### Form Changes

- Dropped the .form-horizontal class
- Forms using grids require the .row class and can use .col-form-label for labels
- Use .form-control-lg and .form-control-sm to increase or decrease the size of an input control
- Help text now uses the .form-text class instead of .help-block

### JavaScript Plugins

- All plugins have been re-written with ES6 syntax
- Takes advantage of new JS enhancements
- UMD support
- jQuery 2.0 supported

### Other Changes

- Bigger fonts and headings
- Dropped support for IE8 and IE9
- Reboot module
- Inversed tables (.table-inverse)
- 30% lighter
- Glyphicons dropped (font-awesome recommended)