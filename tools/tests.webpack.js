// this file uses ES5, so it can be run in PhantomJS 1.9.x
var matchers = require('helpers/teaspoon-jasmine-matchers');
var context = require.context('../src', true, /\.spec$/);
context.keys().forEach(context);

beforeEach(function () {
  jasmine.addMatchers(matchers);
});
