/**
  * Nifty Nav 2
  * A JavaScript menu framework.
  * Author: Eric Stout, Factor1 Studios
  * https://github.com/factor1/nifty-nav-2
  */

// Detect not supported browsers (<=IE9)
const browserNotSupported = document.all && !window.atob;

/**
 * Default Options
 */
let options = {
  icon: 'square', // icon style (square, rounded)
  iconColor: '#fff', // default icon color
  iconColorActive: '#fff', // default active/open icon color
  menuText: false, // toggle MENU text next to icon
  targets: ['niftyNav'], // targets can be an array so you can have multiple instances at a time <div data-nifty-target="niftyNav"></div>
  panelOrigin: 'top',  // where the panel will animate or originate from
  panelPosition: 'absolute', // css position - absolute, relative, fixed, etc...
  panelAnimation: 'slide-in', // type of panel animation (slide-in, bounce-in, off)
  panelAnimationSpeed: 500 // speed of panel animation
}

/**
 * Handle click of target listener
 */
const handleTargetClick = function(e) {
  console.log('This was clicked');
  console.log(e);
}

/**
 * Build Icon Structure
 */
const buildIcons = function(target, options) {
  const icon = `<button class="nifty-icon nifty-icon--${options.icon}">${options.icon}</button>`;
  target.innerHTML = icon;
}

/**
 * Initialization of niftyNav2
 */
const init = function(settings) {
  // quit if browser not supported - TODO: test this actually works.
  if( browserNotSupported ) {
    return console.log('%c [Nifty Nav 2]: Browser not supported. Please upgrade your browser', 'color: #rgb(232, 141, 57)');
  }

  // get the defaults and user settings
  options = Object.assign(options, settings);

  // handle click(s) on target
  const clickTargets = document.querySelectorAll('div[data-nifty-target]');


  for (const [i, target] of clickTargets.entries()) {
    buildIcons(target, options);
    target.addEventListener('click', (e) => {handleTargetClick(e)} );
  }

}

/*
 * Export Public API
 */
module.exports = {
  init
}
