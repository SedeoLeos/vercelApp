export default {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "testEnvironment": "node",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "displayName": "vercel-app-testing-e2e",
  "testMatch": [
    "<rootDir>/test/**/?(*.)+(e2e-spec|e2e-test).[jt]s?(x)"
  ],
  "preset": "./jest.preset.js"
}