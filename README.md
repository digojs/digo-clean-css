# digo-clean-css
[digo](https://github.com/digojs/digo) 插件：使用 [CleanCSS](https://github.com/jakubpawlowicz/clean-css) 压缩 CSS。

## 安装
```bash
npm install digo-clean-css -g
```

## 用法
### 压缩 CSS
```js
digo.src("*.css", "!*.min.css").pipe("digo-clean-css");
```

### 源映射(Source Map)
本插件支持生成源映射，详见 [源映射](https://github.com/digojs/digo/wiki/源映射)。

## 选项
```js
digo.src("*.css", "!*.min.css").pipe("digo-clean-css", {
    advanced: true,             // 是否使用深度优化，如选择器合并等。可以传递对象设置具体的方案，详见：https://github.com/jakubpawlowicz/clean-css#what-advanced-optimizations-are-applied
    aggressiveMerging: true,    // 是否合并选择器。
    benchmark: false,           // 是否记录压缩时间。
    compatibility: "*",         // 兼容性列表。可使用："*"(默认)、"ie7"、"ie8"，详见：https://github.com/jakubpawlowicz/clean-css#how-to-set-a-compatibility-mode
    debug: false,               // 是否启用调试模式。
    inliner: null,              // 自定义导入样式的地址计算函数。
    keepBreaks: false,          // 是否保留换行。
    keepSpecialComments: "*",   // "*"(默认)：表示保留所有注释。 1：表示只保留首个注释。0：表示删除所有注释。
    mediaMerging: true,         // 是否合并 @media 规则。
    processImport: false,       // 是否处理 @import 。*
    processImportFrom: ["all"], // 处理 @import 规则细节。 ['all'] (默认)：表示全部, ['local']：表示只处理本地样式。['remote']：表示只处理远程，或使用黑名单，如 ['!fonts.googleapis.com']。
    rebase: false,              // 是否重定向地址。*
    relativeTo: "",             // 解析 @import 和地址的基地址。
    restructuring: true,        // 是否允许重新组织代码结构。
    root: "",                   // 解析 @import 和地址的根地址。*
    roundingPrecision: 2,       // 小数保留位数。-1 表示禁止修改。
    semanticMerging: false,     // 是否使用语法合并模式。（可能导致样式错乱，启用有风险）。
    shorthandCompacting: true,  // 是否启用连缀压缩。(如果启用了源映射，则默认为 false，否则默认为 true。)
    sourceMap: false,           // 是否生成源映射。可以设置为输入的源映射。*
    sourceMapInlineSources: false,  // 是否在源映射中内联源。
    target: ""                  // 输出路径的重定向基路径。
});
```

> *: 插件内部已设置了此选项的默认值。

另参考 [https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api](https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api)。
