module.exports = function (gulp, plugins, consts) {
    return function (done) {
        var spawn = require('child_process').spawn;
        var docsOutputPath = plugins.path.join(consts.VERSIONED_DIST, 'docs');

        var jekyll = spawn('jekyll', ['build', '--config', 'src/docs/_config.yml', '--source', 'src/docs', '-d', docsOutputPath], {stdio: 'inherit'});
        jekyll.on('exit', function (code) {
            done(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
        });
    }
};
