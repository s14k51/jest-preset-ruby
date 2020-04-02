module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
