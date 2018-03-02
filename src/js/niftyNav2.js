/**
  * Nifty Nav 2
  * A JavaScript menu framework.
  * Author: Eric Stout, Factor1 Studios
  * https://github.com/factor1/nifty-nav-2
**/

import styles from '../scss/niftyNav2.scss';


/**
 * Default Options
 */
let options = {
  icon: 'square', // icon style (square, rounded)
  iconColor: '#fff', // default icon color
  iconColorActive: '#fff', // default active/open icon color
  showMenuText: false, // toggle text next to icon
  menuText: 'Menu', // text to appear when showMenuText is true
  targets: ['niftyNav'], // targets can be an array so you can have multiple instances at a time <div data-nifty-target="niftyNav"></div>
  panelOrigin: 'top',  // where the panel will animate or originate from
  panelPosition: 'absolute', // css position - absolute, relative, fixed, etc...
  panelAnimation: 'slide-in', // type of panel animation (slide-in, bounce-in, fade, off)
  panelAnimationSpeed: 500 // speed of panel animation
}

/**
 *
 * Handle click(s) of target listener
 *
**/
const handleTargetClick = function(e) {
  e.target.classList.toggle('nifty-active');
}

/**
 *
 * Build Icon Structure
 *
**/
const buildIcons = function(target, options) {

  const icon = `
    <button class="nifty-icon nifty-icon--${options.icon}">
      <span></span>
    </button>
  `;
  target.innerHTML = icon;

  // if we are showing menu text
  if( options.showMenuText === true ) {
    target.querySelector('.nifty-icon').classList.add('nifty-icon--has-text');
    target.querySelector('.nifty-icon').innerHTML = `<div class="nifty-icon--text">${options.menuText}</div><span></span>`;
  }

}

/**
 *
 * Initialization of niftyNav2
 *
**/
const init = function(settings) {
  // quit if browser not supported - TODO: test this actually works.
  // Detect not supported browsers (<=IE9)
  const browserNotSupported = document.all && !window.atob;
  
  if( browserNotSupported ) {
    return console.log('%c [Nifty Nav 2]: Browser not supported. Please upgrade your browser.', 'color: #rgb(232, 141, 57)');
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

/**
 *
 * Export Public API
 *
**/
module.exports = {
  init
}
