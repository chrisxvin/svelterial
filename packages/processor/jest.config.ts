module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/tests/**/*.ts'],
  testPathIgnorePatterns: ['/tests/samples/'],
};
