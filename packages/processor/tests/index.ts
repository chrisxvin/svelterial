import processor from '../src/index';

const { preprocess } = require('svelte/compiler');
const { readFileSync } = require('fs');
const path = require('path');

async function render(file: string) {
  const folder = path.join(__dirname, `./samples/${file}`);
  const config = await import(path.join(folder, '_config.ts'));
  process.chdir(folder);
  const source = readFileSync(path.join(folder, 'input.svelte')).toString();
  const { code } = await preprocess(source, processor(config), { filename: file });
  return code;
}

test.each([
  // Basic variable insertion.
  'basic',

  // SCSS like nesting.
  'nesting',

  // Checks if it can import file using '@import'.
  'import',

  // Checks if it can import file using 'src' attribute.
  'src',

  // Features such as loops and array variables.
  'arrays',

  // Features such as mixins.
  'mixins',

  // Features such as scss maps and object variables.
  'maps',

  // Test the variables option in the config file.
  'variables',

  // Test the settings option in the config file.
  'settings',
])('transform %s', async (name) => {
  expect(await render(name)).toMatchSnapshot();
});
