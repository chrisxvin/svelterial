const path = require('path');
const fs = require('fs');
const glob = require('tiny-glob/sync');
const sveltyper = require('sveltyper');

glob('./packages/*/package.json', {}).forEach((_pkg) => {
  const pkgPath = path.resolve(_pkg);
  const pkgRoot = path.dirname(pkgPath);
  const typesFolder = path.join(pkgRoot, 'types');
  const index = [];
  glob('./*.svelte', {
    cwd: path.join(pkgRoot),
    filesOnly: true,
  }).forEach((file) => {
    const filePath = path.join(pkgRoot, file);
    const fileName = path.basename(filePath, '.svelte');
    if (!fileName.startsWith('_')) {
      index.push(`export {default as ${fileName}} from './${fileName}'`);
      const doc = sveltyper({ file: filePath });
      const output = [
        '/// <reference types="svelte" />',
        'import { SvelteComponentTyped } from "svelte";',
        '',
        doc,
        `export default ${fileName};`,
      ].join('\n');
      fs.writeFileSync(path.join(typesFolder, `${fileName}.d.ts`), output);
    }
  });
  fs.writeFileSync(path.join(typesFolder, './index.d.ts'), index.join('\n'));
  console.log(`Generated types for ${path.basename(pkgRoot)}`);
});
