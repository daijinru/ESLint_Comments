/**
 * ESLint
 * Version 20180504
 * 以下内容包括 "eslint:recommend" + 我们自定义的配置
 */
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    globals: {
        "wx": true,
        "App": true,
        "Page": true,
        "getApp": true
    },
    "extends": "eslint:recommended",
    "root": true,
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {

        /**
         * 放弃使用该规则
         * 可以通过打包工具在生产环境中去掉
         */
        "no-console": "off",

        /**
         * @TODO 某些特定UI下会使用全角空格，例如 label 的对齐
         * 禁止使用空白字符，
         * 例如全角空格，
         * 忽略字符串，正则或者模版字符串
         */
        "no-irregular-whitespace": [
            "error",
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true
            }
        ],

        /**
         * 将 var 定义的变量视为块作用域，禁止在块代码外使用
         * 例如
         * if (foo) {
         *     var a = 'foo';
         * }
         * console.log(a);
         */
        "block-scoped-var": "error",

        /**
         * 关闭在类中建议使用 this 的建议
         * 在类中使用 this
         */
        "class-methods-use-this": "off",

        /**
         * 建议 switch 保留有 default 分支
         */
        "default-case": "warn",

        /**
         * 强制使用全等，允许 null 不使用全等
         */
        "eqeqeq": [
            "error",
            "always",
            {
                "null": "ignore"
            }
        ],

        /**
         * 禁止使用 eval() 函数
         */
        "no-eval": "error",

        /**
         * 禁止出现连续的多个空格，
         * 除非是注释前，或者对齐对象的属性、变量定义、import 等
         */
        "no-multi-spaces": [
            "error",
            {
                ignoreEOLComments: true,
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],

        /**
         * @TODO 待议
         * require 必须在全局作用域内
         * 但是也支持条件加载
         */
        "global-require": "warn",

        /**
         * 放弃禁止变量名与上层作用域内的变量重名
         * 因为通常函数的形参和传参同名
         */
        "no-shadow": "off",

        /**
         * 禁止逗号前空格，强制逗号后有空格
         */
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],

        /**
         * 禁止数组括号前后的空格
         * 例如
         * const arr = [ 'foo', 'bar' ];
         * 或
         * const arr = [ 'foo',
         *     'bar'
         * ]
         */
        "array-bracket-spacing": [
            "error",
            "never"
        ],

        /**
         * 强制代码块大括号前后使用空格
         */
        "block-spacing": [
            "error",
            "always"
        ],

        /**
         * 禁止在计算属性内中括号的首尾空格
         * 例如
         * obj[foo ]
         * obj[ 'foo']
         * const x = {[ b ]: a}
         */
        "computed-property-spacing": [
            "error",
            "never"
        ],

        /**
         * 函数名和执行它的括号之间禁止空格
         */
        "func-call-spacing": [
            "error",
            "never"
        ],

        /**
         * 禁止函数参数括号内使用换行
         */
        "function-paren-newline": [
            "error",
            "never"
        ],

        /**
         * 注释相关规则
         */
        "lines-around-comment": [
            "error",
            {
                // 注释上方有空行
                "beforeBlockComment": true,
                // 双斜杠注释上方有空行
                "beforeLineComment": true,
                // 类中函数注释上方有空行
                "allowClassStart": false,
            }
        ],

        /**
         * 强制类成员之间有空行
         */
        "lines-between-class-members": [
            "error",
            "always"
        ],

        /**
         * 强制构造函数首字母大写
         */
        "new-cap": [
            "error",
            {
                "newIsCap": true,
                "capIsNew": false
            }
        ],

        /**
         * 禁止出现多行空行，最大数为 2 行
         * 例如
         * function add(x, y) {
         *     
         * }
         */
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],

        /**
         * 禁止 tabs
         */
        "no-tabs": "error",

        /**
         * 禁止在 function 的左括号前使用空格
         */
        "space-before-function-paren": [
            "error",
            "never"
        ],

        /**
         * 强制在注释中 // 或者 /* 使用一致的空格
         */
        "spaced-comment": [
            "error",
            "always"
        ],

        /**
         * @TODO 是否可选 缩进2
         * 强制使用空格缩进4
         */
        "indent": [
            "error",
            4
        ],

        /**
         * 放弃使用
         */
        "linebreak-style": "off",

        /**
         * 强制使用单引号
         */
        "quotes": [
            "error",
            "single"
        ],

        /**
         * 强制使用分号
         */
        "semi": [
            "error",
            "always"
        ]
    }
};