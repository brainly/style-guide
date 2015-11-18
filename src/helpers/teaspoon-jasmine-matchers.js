export default {
  toHaveClass (util, customEqualityTesters) {
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
