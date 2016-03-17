module.exports = function (gulp, plugins, consts) {
    return function () {
        var del = require('del');
        return del([plugins.path.join(consts.DIST, '**'), '!' + consts.DIST]);
    }
};
