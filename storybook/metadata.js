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
      defaultValue: name,
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

  return merge(Object.assign(props, slots), settings);
};
