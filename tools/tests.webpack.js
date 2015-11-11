var matchers = require('helpers/teaspoon-jasmine-matchers');
console.log(matchers);

var context = require.context('../src', true, /\.spec$/);
context.keys().forEach(context);

beforeEach(() => {
  jasmine.addMatchers(matchers);
});
