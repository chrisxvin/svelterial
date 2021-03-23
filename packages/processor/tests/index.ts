import processor from '../src/index';

const { preprocess } = require('svelte/compiler');
const { readFileSync } = require('fs');
const path = require('path');

async function render(file: string) {
  const folder = path.join(__dirname, `./samples/${file}`);
  process.chdir(folder);
  const config = await import(path.join(folder, '_config.js'));
  const source = readFileSync(path.join(folder, 'input.svelte')).toString();
  const { code } = await preprocess(source, processor(config), { filename: file });
  return code;
}

/**
 * Basic variable insertion
 */
test('basic', async () => {
  expect(await render('basic')).toMatchSnapshot();
});

/**
 * SCSS like nesting
 */
test('nesting', async () => {
  expect(await render('nesting')).toMatchSnapshot();
});

/**
 * Checks if it can import file using '@import'
 */
test('import', async () => {
  expect(await render('import')).toMatchSnapshot();
});

/**
 * Checks if it can import file using 'src' attribute
 */
test('src', async () => {
  expect(await render('src')).toMatchSnapshot();
});

/**
 * Features such as loops and array variables.
 */
test('arrays', async () => {
  expect(await render('arrays')).toMatchSnapshot();
});

/**
 * Features such as mixins.
 */
test('mixins', async () => {
  expect(await render('mixins')).toMatchSnapshot();
});

/**
 * Features such as scss maps and object variables.
 */
test('maps', async () => {
  expect(await render('maps')).toMatchSnapshot();
});
