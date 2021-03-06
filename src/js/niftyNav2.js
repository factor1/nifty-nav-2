/**
  * Nifty Nav 2
  * A JavaScript menu framework.
  * Author: Eric Stout, Factor1 Studios
  * https://github.com/factor1/nifty-nav-2
**/

// eslint-disable-next-line
import styles from '../scss/niftyNav2.scss';


/**
 * Default Options
 */
let options = {
  icon: 'square', // icon style (square, rounded)
  iconColor: '#fff', // default icon color
  maskAnimationSpeed: 600, // speed of the mask animation
  maskColor: 'rgba(0,0,0,0.5)',
  menuText: 'Menu', // text to appear when showMenuText is true
  menuTextColor: '#fff', // menu text color
  panelAnimation: 'slide-in', // type of panel animation (slide-in, fade-in, off)
  panelAnimationSpeed: 500, // speed of panel animation,
  panelColor: '#2d2d2d', // panel color
  panelHeight: 'auto', // panel height
  panelOrigin: 'top',  // where the panel will animate or originate from (top/left/right)
  panelPosition: 'absolute', // css position - absolute, relative, fixed, etc...
  panelTopOffset: 0, // top offset for the panel
  panelWidth: '100%', // panel width
  showMask: true, // if there should be a mask covering page content,
  showMenuText: false, // toggle text next to icon
  targets: ['niftyNav'] // targets can be an array so you can have multiple instances at a time <div data-nifty-target="niftyNav"></div>
}

/**
 *
 * Build Icon Structure
 *
**/
const buildIcons = (target, options) => {

  const icon = `
    <button class="nifty-button">
      <div class="nifty-button__container">
        <div class="nifty-icon nifty-icon--${options.icon}">
          <span style="background-color: ${options.iconColor}"></span>
          <span style="background-color: ${options.iconColor}"></span>
          <span style="background-color: ${options.iconColor}"></span>
        </div>
      </div>
    </button>
  `;
  target.innerHTML = icon;

  // if we are showing menu text
  if( options.showMenuText === true ) {
    target.querySelector('.nifty-button').innerHTML = `
      <div class="nifty-button__container">
        <div class="nifty-icon--text" style="color: ${options.menuTextColor};">
          <span>${options.menuText}</span>
        </div>
        <div class="nifty-icon nifty-icon--${options.icon}">
          <span style="background-color: ${options.iconColor}"></span>
          <span style="background-color: ${options.iconColor}"></span>
          <span style="background-color: ${options.iconColor}"></span>
        </div>
      </div>
    `;
  }

}

/**
 *
 * Build Panel
 *
**/
const buildPanel = (target, options) => {
  // get the panel id from the data attr
  const panelId = target.getAttribute('data-nifty-target');
  const panel = document.getElementById(panelId);

  // add nifty-panel class automatically
  panel.classList.add('nifty-panel');

  // Panel Top Offset Setting
  if( options.panelTopOffset !== 0 ) {
    panel.style.cssText += `top: ${options.panelTopOffset}px`;
  }

  // Panel Origin Setting
  panel.classList.add(`nifty-panel--${options.panelOrigin}`);

  // Panel Width Setting
  if( options.panelWidth !== '100%' ) {
    panel.style.cssText += `width: ${options.panelWidth};`;
  }

  // Panel Height Setting
  if( options.panelHeight !== 'auto' ) {
    panel.style.cssText += `height: ${options.panelHeight};`;
  }

  // Panel Color
  panel.style.cssText += `background-color: ${options.panelColor};`;

  // Panel Position Setting
  panel.style.cssText += `position: ${options.panelPosition};`

  // Panel Animation Speed Setting
  panel.style.cssText += `transition: all ${options.panelAnimationSpeed}ms ease-in-out;`;

  // Set Panel State to Closed
  panel.classList.add('nifty-panel--closed');

  // handle animation options
  if( options.panelAnimation === 'fade-in' ) {
    panel.classList.add('nifty-panel--fade-in');
  } else if ( options.panelAnimation === 'off') {
    panel.classList.add('nifty-panel--off');
  }

}

/**
 *
 * On Toggle - Fires a callback function when passed to togglePanel()
 *
**/
let onToggleCallback = null;
const onToggle = ( callback ) => {
  if( callback ) {
    onToggleCallback = callback;
  }
};

/**
 *
 * Open/Close Panel
 *
**/
const togglePanel = (panelId, callback = onToggleCallback) => {
  const panel = document.getElementById(panelId);

  panel.classList.toggle('nifty-panel--open');

  if( callback ) {
    return callback();
  }
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

    setTimeout( () => {
      mask.classList.remove('nifty-mask--closing')
    }, 500);

  } else {
    mask.classList.toggle('nifty-mask--active');
  }

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
  mask.style.cssText += `background: ${options.maskColor}`;

  // if animations are disabled set transition to none
  if( options.panelAnimation === 'off' ) {
    mask.style.cssText += 'transition: none;';
  } else {
    // set the transition for the mask
    mask.style.cssText += `opacity: ${options.maskAnimationSpeed}ms ease-in-out`;
  }

  // showMask setting
  if( !options.showMask ) {
    mask.style.cssText += 'opacity: 0;';
  }

  // add click listener
  mask.addEventListener('click', () => {

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
 * Handle click(s) of target listener
 *
**/
const handleTargetClick = (e) => {
  const panelId = e.target.parentElement.getAttribute('data-nifty-target');

  const icon = e.target.querySelector('.nifty-icon');
  icon.classList.toggle('nifty-active');

  togglePanel(panelId);
  toggleMask();
}

/**
 *
 * Toggle All Icon States
 *
**/
const toggleIcons = () => {
  const icons = document.querySelectorAll('.nifty-icon');

  icons.forEach( ( icon ) => {
    icon.classList.toggle('nifty-active');
  });
}

/**
 *
 * Initialization of niftyNav2
 *
**/
const init = (settings) => {
  // Detect not supported browsers (<=IE9)
  const browserNotSupported = document.all && !window.atob;

  if( browserNotSupported ) {
    return console.error('[Nifty Nav 2]: Browser not supported. Please upgrade your browser.');
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
  onToggle,
  toggleIcons,
  toggleMask,
  togglePanel
}
