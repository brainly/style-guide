module.exports = function(gulp, plugins, consts) {
  return function() {
    const del = require('del');

    return del([
      plugins.path.join(consts.ASSETS_DIST, '**'),
      `!${consts.ASSETS_DIST}`,
    ]);
  };
};
