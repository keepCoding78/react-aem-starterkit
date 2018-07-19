module.exports = {
  "testPathIgnorePatterns": [
    "<rootDir>/scripts/",
    "<rootDir>/node_modules/"
  ],
  "coverageDirectory": "<rootDir>/coverage/",
  "coverageReporters": ["html", "cobertura"],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/src/**/*.{js,jsx}"
  ],
  "setupFiles": ['./src/setupTests.js'],
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/config/styleMock.js"
  }
}
