module.exports = function (gulp, plugins, consts) {
    return function (done) {
        var del = require('del');
        del([plugins.path.join(consts.DIST, '**'), '!' + consts.DIST], done);
    }
};
