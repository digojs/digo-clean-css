var cleanCSS = require("clean-css");

module.exports = function CleanCSS(file, options, done) {

    // 设置默认值。
    options = Object.assign({
        sourceMap: file.sourceMap,
        root: file.srcDir,
        processImport: false,
        rebase: false
    }, options);

    // 生成。
    var files = { __proto__: null };
    files[file.srcPath] = {
        styles: file.content,
        sourceMap: file.sourceMapObject
    };
    new cleanCSS(options).minify(files, function (error, result) {

        if (error) {
            file.error({
                plugin: CleanCSS.name,
                error: error
            });
        } else {

            // 报告错误。
            for (var i = 0; i < result.errors.length; i++) {
                file.error({
                    plugin: CleanCSS.name,
                    message: result.errors[i]
                });
            }
            for (var i = 0; i < result.warnings.length; i++) {
                file.warning({
                    plugin: CleanCSS.name,
                    message: result.warnings[i]
                });
            }

            // 保存。
            file.content = result.styles;
            if (result.sourceMap) {
                file.sourceMapObject = result.sourceMap;
            }

        }

        done();
    });

};
