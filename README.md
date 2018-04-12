# nifty-nav-2
[![Build Status](https://travis-ci.org/factor1/nifty-nav-2.svg?branch=master)](https://travis-ci.org/factor1/nifty-nav-2)
![Github file size](https://img.shields.io/github/size/factor1/nifty-nav-2/dist/niftyNav2.js.svg)
![npm](https://img.shields.io/npm/v/nifty-nav-2.svg)
![GitHub issues](https://img.shields.io/github/issues-raw/factor1/nifty-nav-2.svg)
![license](https://img.shields.io/github/license/factor1/nifty-nav-2.svg)
![David Dependencies](https://david-dm.org/factor1/nifty-nav-2.svg)

A customizable JavaScript menu framework for modern browsers made easy.

## Getting Started
### 🖥 Installation
---
Add Nifty Nav 2 to your project using your favorite package manager.

##### npm
```bash
npm install nifty-nav-2 --save
```

##### yarn
```bash
yarn add nifty-nav-2
```

###  📂 Including in your project
---
#### Styles
Import the Nifty Nav 2 css or scss, or ensure it is included in your build. The following
is using scss to import from `node_modules`. Alternatively, you could copy `niftyNav2.css`
from `node_modules` to your project.

```scss
// include nifty nav 2 styles
@import 'nifty-nav-2/dist/niftyNav2.css'
```

#### JavaScript
How you include the Nifty Nav 2 JavaScript library is up to you and the architecture
of your project. Nifty Nav 2 is available as a UMD module so it can be used as a
AMD, Global, Node, or ES6 module. The compiled JavaScript file found in `dist/` contains
the `babel-polyfill` to ensure proper cross browser support.

##### Simple
Copy the `niftyNav2.js` file in `nifty-nav-2/dist` to your project directory and include
in your HTML. You do not need to include any polyfills, as they are bundled directly
into `dist/niftyNav2.js`.

```html
<html>
  <body>
    <!-- Your HTML Content -->
    <script src="path_to_your_assets/js/niftyNav2.js"></script>
  </body>
</html>
```

##### Using Gulp
A Gulp implementation that concatenates JS files may look something like this.

```js
var concatFiles = [
  './node_modules/nifty-nav-2/dist/niftyNav2.js', // adds niftyNav2.js to be concatenated
  './assets/js/*.js', // grabs all js files from our assets/js folder
  '!./assets/js/*.min.js', // ignore minified files
]

// Concatenate & Minify JavaScript
gulp.task('scripts', ['lint'], function() {
  return gulp.src( concatFiles )
    .pipe(concat( 'all.js' ))
    .pipe(gulp.dest( './assets/js/' ))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest( './assets/js/' ))
});
```

##### ES6 Module
```js
import niftyNav2 from 'nifty-nav-2';
```

### 🛠 Usage
---
#### Adding the Trigger
Place the trigger or "hamburger". You can place this wherever you want it to appear
in the DOM.

```HTML
<div data-nifty-target="niftyNav"></div>
```

Your element must have a `data-nifty-target` attribute with a unique name. Here,
we are simply calling it `niftyNav` but it can be anything you wish. If changed from
the default `niftyNav` be sure to pass that via settings when initializing.

#### Adding the Panel
Add the panel that will be opened on click. The ID should match the value of `data-nifty-target`.

```HTML
<div id="niftyNav">
  <!--Panel Contents -->
</div>
```

#### Initialization
Initialize Nifty Nav 2 via JavaScript. The following is an example with settings
for `iconColor` and `panelColor`.

```js
<script>
  niftyNav2.init({
    iconColor: 'rgb(123, 249, 158)',
    panelColor: 'rgb(123, 249, 158)',
  });
</script>
```

## ⚙️ Settings
There are plenty settings that can be used to customize Nifty Nav 2.

| Setting | Description | Accepts | Default |
|---------|-------------|---------|---------|
| `targets` | Targets to create/use Nifty Nav 2 (from `data-nifty-target`) | **array** | `['niftyNav']`
| `icon`    | Icon style to be used | **string** - square, rounded | `square` |
| `iconColor` | Color to be applied to the icon | **string** | `#fff` |
| `showMenuText` | Show or hide text next to the icon | **boolean** | `false` |
| `menuText` | Text to appear when `showMenuText` is `true` | **string** | `Menu` |
| `menuTextColor` | Color to be applied to `menuText` | **string ** | `#fff` |
| `panelOrigin` | Placement of where the Nifty Nav 2 panel will animate from | **string** - top, left, right | `top` |
| `panelTopOffset` | Top offset for the panel | **integer** | `0` |
| `panelPosition` | CSS positioning for the panel | **string** | `absolute` |
| `panelHeight` | Height to be applied to the panel | **string** | `auto` |
| `panelWidth` | Width to be applied to the panel | **string** | `100%` |
| `panelAnimation` | Type of animation for the panel | **string** - slide-in, fade-in, off | `slide-in` |
| `panelAnimationSpeed` | Speed of panel animation | **integer** | `500` |
| `panelColor` | Color to be applied to the background of the panel | **string** | `#2d2d2d` |
| `showMask` | Show or hide the mask/overlay | **boolean** | `true` |
| `maskAnimationSpeed` | Speed at which the mask/overlay animates in | **integer** | `600` |
| `maskColor` | Color to be applied to the mask/overlay | **string** | `rgba(0,0,0,0.5)` |

## 🌎 Browser Support
Current browser support as of **v0.1.0**.

| Browser | Support | Notes |
|---------|:-------:|-------|
| Edge 16+ | ✅ |       |
| Edge <= 15 | ✅ |  |
| IE 11 | ✅ |  |
| IE 10 | ⚠️ | May need CSS to adjust hamburger and menu text placement, core functionality is OK |
| Firefox 51+ | ✅ |  |
| Chrome 51+ | ✅ |   |
| Safari 9.1+ | ✅ |  |


## ⚠️ Issues & Contributions
Feel free to open an issue or a pull request if you find any issues or enhancements.

## 📝 Changelog
The changelog can be found [here](https://github.com/factor1/nifty-nav-2/blob/master/CHANGELOG.md).
