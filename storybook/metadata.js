import metadata from '@svelterialjs/metadata';
import { merge } from 'merge-anything';

function getControlType(type) {
  const controls = {
    boolean: 'boolean',
    number: 'number',
    object: 'object',
    array: 'object',
    string: 'text',
  };

  return controls[type] || 'text';
}

export default (component, settings = {}) => {
  const [category, filename] = component.split('/');
  const doc = metadata[category][filename];
  const props = {};
  for (const [name, prop] of Object.entries(doc.props)) {
    let type = 'any';
    const typeTag = prop.tags.find(({ tag }) => tag === 'type');
    if (typeTag) ({ type } = typeTag);
    else if (prop.value === '\'\'') type = 'string';
    else {
      try {
        type = typeof JSON.parse(prop.value);
      } catch {
        type = 'any';
      }
    }

    props[name] = {
      name,
      type: {
        required: prop.required,
      },
      description: prop.description,
      table: {
        category: 'Props',
        type: {
          summary: type,
        },
        defaultValue: {
          summary: prop.value,
        },
      },
      control: {
        type: getControlType(type),
      },
    };
  }

  const slots = {};
  for (const [name, slot] of Object.entries(doc.slots)) {
    slots[`slot_${name}`] = {
      name,
      defaultValue: '',
      type: {
        required: false,
      },
      description: slot.description,
      table: {
        category: 'Slots',
        type: {
          summary: slot.type,
        },
      },
      control: {
        type: 'text',
      },
    };
  }

  const styles = {};
  for (const [name, style] of Object.entries(doc.styles)) {
    styles[name] = {
      name,
      defaultValue: style.default,
      type: {
        required: false,
      },
      description: style.description,
      table: {
        category: 'Styles',
        defaultValue: {
          summary: style.default,
        },
      },
      control: {
        type: 'text',
      },
    };
  }

  const output = Object.assign(props, styles, slots);
  const order = Object.keys(output);
  const merged = merge(output, settings);

  // preserve order of keys such as `class`, `prop1` ... as defined in the svelte file.
  return order.reduce((acc, i) => {
    acc[i] = Object.assign({}, merged[i]);
    return acc;
  }, {});
};
