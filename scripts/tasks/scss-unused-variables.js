module.exports = function (gulp, plugins, consts) {
    return function(done) {
        var cmd = plugins.path.join(consts.PROJECT_DIR, 'scripts', 'find_scss_unused_variables.sh')  + ' ' + consts.SRC;

        require('child_process').exec(cmd, function(error, stdout) {
            if (error) {
                error = new plugins.util.PluginError('scss-unused-variables', {
                    message: stdout,
                    showStack: false
                });
                return done(error);
            } // return error
            done();
        });
    }
};
