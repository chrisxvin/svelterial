const path = require('path');
const doc = require('svelte-docster');
const glob = require('tiny-glob/sync');

const packages = path.resolve('../packages');
const output = {};
glob('**/*.svelte', { cwd: packages }).forEach((file) => {
  const filename = path.basename(file, '.svelte');
  const [category] = path.dirname(file).split(path.sep);
  if (filename.startsWith('_')) return;
  if (!output[category]) output[category] = {};
  const fullFilePath = path.join(packages, file);
  output[category][filename] = Object.assign(doc({ file: fullFilePath }), {
    // remove useless options
    all: undefined,
    module: undefined,
  });
  // console.log(`Generated docs for ${category}/${filename}.`);
});

module.exports = output;
