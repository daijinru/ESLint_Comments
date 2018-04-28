/**
 * ESLint
 * 
 */
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
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
         * 禁止多行语句
         * 例如
         * const foo = bar
         * (1 || 2).baz();
         */
        "no-unexpected-multiline" : "warn",

        /**
         * 强制 typeof 比较的对象必须是正确的对象
         * 例如 undefined, object, boolean, number, string, function, symbol
         */
        "valid-typeof": "error",

        /**
         * 禁止在代码块内出现函数声明
         */
        "no-inner-declarations": "error",

        /**
         * 禁止多余的分号
         * 例如 ;;
         */
        "no-extra-semi": "warn",

        /**
         * 禁止对象内有多余的属性名
         * 例如 { test: 'test1', test: 'test2' }
         */
        "no-dupe-keys": "error",

        /**
         * 禁止函数有重复的参数名
         */
        "no-dupe-args": "error",

        /**
         * 禁止空的函数块
         * 例如
         * if (foo) {}
         */
        "no-empty": "error",

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
         * 建议在类中使用 this
         */
        "class-methods-use-this": "warn",

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
         * 放弃在函数内顶部使用 var 声明的规则
         */
        "vars-on-top": "off",

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
         * 禁止空格和 tab 混用
         */
        "no-mixed-spaces-and-tabs": "error",

        /**
         * 禁止出现多行空行
         * 例如
         * function add(x, y) {
         *     
         * }
         */
        "no-multiple-empty-lines": "error",

        /**
         * 禁止 tabs
         */
        "no-tabs": "error",

        /**
         * 禁止代码行尾的空格
         */
        "no-trailing-spaces": "error",

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