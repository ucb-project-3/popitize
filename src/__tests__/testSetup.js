// This file is written in ES5 since it's not transpiled by Babel.
/* This file does the following:
 1. Sets Node environment variable
 2. Registers babel for transpiling our code for testing
 3. Disables Webpack-specific features that Mocha doesn't understand.
 4. Requires jsdom so we can test via an in-memory DOM in Node
 5. Sets up global vars that mimic a browser.
This setting assures the .babelrc dev config (which includes
 hot module reloading code) doesn't apply for tests.
 But also, we don't want to set it to production here for
 two reasons:
 1. You won't see any PropType validation warnings when
 code is running in prod mode.
 2. Tests will not display detailed error messages
 when running against production version code
*/
process.env.NODE_ENV = 'test';
// // // Register babel so that it will transpile ES6 to ES5 before our tests run.
require('babel-register')();
// // // Disable webpack-specific features for tests since
// // // Mocha doesn't know what to do with them.
require.extensions['.css'] = function () { return null; };
// // // Configure JSDOM and set global variables
// // // to simulate a browser environment for tests.


const { configure } = require('enzyme');

const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
