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
  panelOrigin: 'top',  // where the panel will animate or originate from (top/left/right)
  panelTopOffset: 0, // top offset for the panel
  panelPosition: 'absolute', // css position - absolute, relative, fixed, etc...
  panelHeight: 'auto', // panel height
  panelAnimation: 'slide-in', // type of panel animation (slide-in, fade, off)
  panelAnimationSpeed: 500, // speed of panel animation
  showMask: true // if there should be a mask covering page content
}

/**
 *
 * Handle click(s) of target listener
 *
**/
const handleTargetClick = function(e) {
  const panelId = e.target.parentElement.getAttribute('data-nifty-target');
  e.target.classList.toggle('nifty-active');

  togglePanel(panelId);
  toggleMask();
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
 * Build Panel
 *
**/
const buildPanel = function(target, options) {
  // get the panel id from the data attr
  const panelId = target.getAttribute('data-nifty-target');
  const panel = document.getElementById(panelId);

  // Panel Top Offset Setting
  if( options.panelTopOffset !== 0 ) {
    panel.style.top = `${options.panelTopOffset}px`;
  }

  // Panel Origin Setting
  panel.classList.add(`nifty-panel--${options.panelOrigin}`);

  // Set Panel State to Closed
  panel.classList.add(`nifty-panel--closed`);

  // handle animation options
  if( options.panelAnimation === 'fade' ) {
    panel.classList.add('nifty-panel--fade');
  } else if ( options.panelAnimation === 'off') {
    panel.classList.add('nifty-panel--off');
  }

}

/**
 *
 * Open/Close Panel
 *
**/
const togglePanel = function(panelId) {
  const panel = document.getElementById(panelId);

  panel.classList.toggle('nifty-panel--open');
}

/**
 *
 * Add Mask to DOM
 *
**/
const addMask = () => {
  // setup element
  const mask = document.createElement('div');
  mask.setAttribute('id', 'niftyMask');
  mask.setAttribute('class', 'nifty-mask');

  // if animations are disabled
  if( options.panelAnimation === 'off' ) {
    mask.classList.add('nifty-mask--animation-off');
  }

  // add click listener
  mask.addEventListener('click', ()=> {
    toggleMask();

    // shut down all open nifty nav panels
    const panels = document.querySelectorAll('.nifty-panel');

    for(let i = 0; panels.length > i; i++ ) {
      panels[i].classList.remove('nifty-panel--open');
    }

    // remove all active icons
    const icons = document.querySelectorAll('.nifty-icon');

    for(let i = 0; icons.length > i; i++ ) {
      icons[i].classList.remove('nifty-active');
    }

  });

  return document.body.appendChild(mask);
}

/**
 *
 * Toggle Mask
 *
**/
const toggleMask = () => {
  const mask = document.getElementById('niftyMask');

  if( mask.classList.contains('nifty-mask--active') ) {
    mask.classList.remove('nifty-mask--active');
    mask.classList.add('nifty-mask--closing');

    setTimeout(()=> {
      mask.classList.remove('nifty-mask--closing')
    }, 500);

  } else {
    mask.classList.toggle('nifty-mask--active');
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
    buildPanel(target, options);
    target.addEventListener('click', (e) => {handleTargetClick(e)} );
  }

  // Add mask (even if false, as its used for click to close)
  addMask();

}

/**
 *
 * Export Public API
 *
**/
module.exports = {
  init,
  togglePanel,
  toggleMask
}
