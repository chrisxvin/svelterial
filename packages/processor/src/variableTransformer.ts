import { isPlainObject } from 'is-plain-object';

function transformer(value: any): string {
  switch (typeof value) {
    case 'boolean':
      return value ? 'true' : 'false';
    case 'string':
      return value;
    case 'number':
      return value.toString();
    case 'object':
      if (Array.isArray(value)) {
        const result = value.map((val) => transformer(val)).join(',');
        return `(${result})`;
      }

      if (isPlainObject(value)) {
        const result = Object.entries(value)
          .map(([key, val]) => `${key}: ${transformer(val)}`)
          .join(',');
        return `(${result})`;
      }

      if (value === null) return 'null';

      return value.toString();
    default:
      return 'null';
  }
}

const convert = ([key, val]) => `$${key}: ${transformer(val)};`;

export default (vars: object) => Object.entries(vars).map(convert).join('\n');
