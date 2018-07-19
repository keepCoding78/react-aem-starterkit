module.exports = {
  'testPathIgnorePatterns': [
    '<rootDir>/scripts/',
    '<rootDir>/node_modules/'
  ],
  'coverageDirectory': '<rootDir>/coverage/',
  'collectCoverage': true,
  'collectCoverageFrom': [
    '**/src/**/*.{js,jsx}'
  ],
  'setupFiles': ['./src/setupTests.js']
}
