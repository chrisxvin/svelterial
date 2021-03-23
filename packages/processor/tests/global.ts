import globalStyles from '../src/global';

const postcss = require('postcss');

async function run(css: string) {
  const result = await postcss([globalStyles]).process(css, {
    from: undefined,
  });
  return result.css;
}

test('selectors', async () => {
  expect(await run('a {}')).toEqual(':global(a) {}');
  expect(await run('.a, b, c.d {}')).toEqual(':global(.a), :global(b), :global(c.d) {}');
  expect(await run('.a:hover {}')).toEqual(':global(.a:hover) {}');
});

test('keyframes', async () => {
  expect(await run('@keyframes anim {}')).toEqual('@keyframes -global-anim {}');
});
