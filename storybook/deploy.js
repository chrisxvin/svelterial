const ghpages = require('gh-pages');

ghpages.publish('storybook-static', (err) => {
  console.log(err);
});
