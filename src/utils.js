const Color = require('color');

const handlers = {
  inline: boolToString,
  'full-width': boolToString,
  width: numberToPx,
  height: numberToPx,
  'border-radius': numberToPx,
  'border-width': numberToPx,
  'background-size': numberToPx,
  padding: numberToPx,
  'padding-top': numberToPx,
  'padding-right': numberToPx,
  'padding-bottom': numberToPx,
  'padding-left': numberToPx,
  'font-size': numberToPx,
  'letter-spacing': numberToPx,
  'line-height': numberToPx,
  'icon-padding': numberToPx,
  'text-padding': numberToPx,
  color: handleColor,
  'border-color': handleColor,
  'background-color': handleColor,
  'container-background-color': handleColor,
  'inner-background-color': handleColor,
};

export function handleMjmlProps(props) {
  return Object.keys(props).reduce((acc, curr) => {
    const mjmlProp = kebabCase(curr);
    return {
      ...acc,
      [mjmlProp]: handleMjmlProp(mjmlProp, props[curr]),
    };
  }, {});
}

function handleMjmlProp(name, value) {
  if (typeof value === 'undefined' || value === null) {
    return undefined;
  }
  const handler = handlers[name] || ((_name, value_) => value_);
  return handler(name, value);
}

function kebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function boolToString(name, value) {
  return value ? name : undefined;
}

function numberToPx(name, value) {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

function handleColor(name, value) {
  const color = parseColor(value);
  if (color) {
    if (value[0] === '#' && value.length === 9) {
      const alpha = color.alpha().toFixed(2);
      return color
        .rgb()
        .alpha(alpha)
        .toString();
    }
    return value;
  }
  return '';
}

function parseColor(value) {
  try {
    return new Color(value);
  } catch (e) {}
  return null;
}
