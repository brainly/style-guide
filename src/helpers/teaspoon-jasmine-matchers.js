export default {
  /* eslint-disable no-unused-vars*/
  toHaveClass (util, customEqualityTesters) {
    /* eslint-enable no-unused-vars*/
    return {
      compare ($, expected) {
        let result = {
          pass: ($.find(`.${expected}`).length !== 0)
        };

        result.message = result.pass ?
                         `Expected component to have class ${expected}` :
                         `Component does not have expected class ${expected}`;

        return result;
      }
    }
  }
};
