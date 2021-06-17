/**
 * Creates a ripple element but does not destroy it (use RippleStop for that)
 *
 * @param {Event} e
 * @param {*} options
 * @returns Ripple element
 */
function RippleStart(e, _opts = {}) {
  e.stopImmediatePropagation();
  const opts = Object.assign(
    {
      class: '',
      color: 'currentColor',
      opacity: 0.1,
      centered: false,
      spreadingDuration: '.4s',
      spreadingDelay: '0s',
      spreadingTimingFunction: 'linear',
      clearingDuration: '1s',
      clearingDelay: '0s',
      clearingTimingFunction: 'ease-in-out',
    },
    _opts,
  );

  // Parent element
  const target = e.currentTarget;

  // Create ripple
  const ripple = document.createElement('div');
  const rippleStyle = ripple.style;

  // Adding default stuff
  ripple.className = 's-ripple ' + opts.class;
  target.appendChild(ripple);
  rippleStyle.opacity = opts.opacity;
  rippleStyle.transition = `transform ${opts.spreadingDuration} ${opts.spreadingTimingFunction} ${opts.spreadingDelay},opacity ${opts.clearingDuration} ${opts.clearingTimingFunction} ${opts.clearingDelay}`;
  rippleStyle.background = opts.color;

  // Positioning ripple
  const targetRect = target.getBoundingClientRect();
  if (opts.centered) {
    rippleStyle.top = `${targetRect.height / 2}px`;
    rippleStyle.left = `${targetRect.width / 2}px`;
  } else {
    const distY = e.clientY;
    const distX = e.clientX;
    rippleStyle.top = `${distY - targetRect.top}px`;
    rippleStyle.left = `${distX - targetRect.left}px`;
  }

  // Enlarge ripple
  rippleStyle.transform = `scale(${
    Math.max(targetRect.width, targetRect.height) * 0.02
  }) translate(0,0)`;
  return ripple;
}

/**
 * Destroys the ripple, slowly fading it out.
 *
 * @param {Element} ripple
 */
function RippleStop(ripple) {
  if (ripple) {
    ripple.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'opacity') ripple.remove();
    });
    ripple.style.opacity = 0;
  }
}

/**
 * @param {Element} node
 */
export default function (node, _options = {}) {
  let options = _options;
  let destroyed = false;
  let ripple;
  let keyboardActive = false;
  const handleStart = (e) => {
    ripple = RippleStart(e, options);
  };
  const handleStop = () => RippleStop(ripple);
  const handleKeyboardStart = (e) => {
    if (!keyboardActive && (e.keyCode === 13 || e.keyCode === 32)) {
      ripple = RippleStart(e, { ...options, centered: true });
      keyboardActive = true;
    }
  };
  const handleKeyboardStop = () => {
    keyboardActive = false;
    handleStop();
  };

  function setup() {
    node.classList.add('s-ripple-container');
    node.addEventListener('pointerdown', handleStart, { passive: true });
    node.addEventListener('pointerup', handleStop, { passive: true });
    node.addEventListener('pointerleave', handleStop, { passive: true });
    node.addEventListener('keydown', handleKeyboardStart, { passive: true });
    node.addEventListener('keyup', handleKeyboardStop, { passive: true });
    destroyed = false;
  }

  function destroy() {
    node.classList.remove('s-ripple-container');
    node.removeEventListener('pointerdown', handleStart);
    node.removeEventListener('pointerup', handleStop);
    node.removeEventListener('pointerleave', handleStop);
    node.removeEventListener('keydown', handleKeyboardStart);
    node.removeEventListener('keyup', handleKeyboardStop);
    destroyed = true;
  }

  if (options) setup();

  return {
    update(newOptions) {
      options = newOptions;
      if (options && destroyed) setup();
      else if (!(options || destroyed)) destroy();
    },
    destroy,
  };
}
