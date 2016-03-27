module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "comma-dangle": "error",
        "no-cond-assign": "error",
        "no-dupe-args": "error",
        "no-empty": "warn",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "warn",
        "no-extra-parens": "warn",
        "no-extra-semi": "error",
        "no-irregular-whitespace": "warn",
        "no-sparse-arrays": "error",
        "no-unreachable": "error",
        "valid-typeof": "error",
        "curly": "warn",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "no-else-return": "error",
        "no-empty-pattern": "error",
        "no-implicit-coercion": "error",
        "no-param-reassign": "error",
        "no-redeclare": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": [2, {"skipBlankLines": true}],
        "no-unmodified-loop-condition": "error",
        "vars-on-top": "warn",
        "spaced-comment": [2, "always"],
        "space-infix-ops": [2, {"int32Hint": false}],
        "sort-imports": [2, {
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],
        "comma-spacing": [2, {"before": false, "after": true}]
    }


}
