import transform from '../src/variableTransformer';

test('string', () => {
  const values = {
    color: 'red',
  };

  expect(transform(values)).toEqual('$color: red;');
});

test('boolean', () => {
  const values = {
    visible: true,
  };

  expect(transform(values)).toEqual('$visible: true;');
});

test('number', () => {
  const values = {
    amount: 12,
  };

  expect(transform(values)).toEqual('$amount: 12;');
});

test('array', () => {
  const values = {
    colors: ['red', 'blue', 'green'],
  };

  expect(transform(values)).toEqual('$colors: (red,blue,green);');
});

test('maps', () => {
  const values = {
    sizes: {
      sm: '200px',
      md: '400px',
      lg: '800px',
    },
  };

  expect(transform(values)).toEqual('$sizes: (sm: 200px,md: 400px,lg: 800px);');
});

test('nested', () => {
  const values = {
    a: {
      b: {
        c: 'd',
      },
    },
    e: 'f',
  };

  expect(transform(values)).toEqual('$a: (b: (c: d));\n$e: f;');
});
