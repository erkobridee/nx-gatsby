// https://github.com/nrwl/nx/blob/master/packages/jest/preset/jest-preset.ts
const nxPreset = require('@nrwl/jest/preset');

/*
	Jest Docs
	https://jestjs.io/docs/en/getting-started
	Code with Hugo — Jest ignore or exclude file/function/statement from test coverage
	https://codewithhugo.com/jest-exclude-coverage/
*/

const jestHelpersDir = `${__dirname}/tools/jest-helpers`;

module.exports = {
  ...nxPreset,
  moduleNameMapper: {
    '^.+\\.svg$': `${jestHelpersDir}/svgrMock.js`,
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${jestHelpersDir}/fileMock.js`,
  },
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
};
