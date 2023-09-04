export default {
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ],
  "coverageDirectory": "./coverage/vercel-app-testing",
  "testEnvironment": "node",
  "displayName": "vercel-app-testing",
  "testMatch": [
    "<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)"
  ],
  "preset": "./jest.preset.js"
}