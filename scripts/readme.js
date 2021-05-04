const glob = require('tiny-glob/sync');
const path = require('path');
const fs = require('fs');

const output = [];
glob('./packages/*/package.json', {}).forEach((_pkg) => {
  const pkgPath = path.resolve(_pkg);
  const pkg = JSON.parse(fs.readFileSync(pkgPath).toString());
  const { description, name } = pkg;
  const folder = path.basename(path.dirname(pkgPath));
  output.push(`[**${name}**](${folder}) - ${description}`);
});

fs.writeFileSync(path.resolve('./packages/README.md'), output.join('\n'));
