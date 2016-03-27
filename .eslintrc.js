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
        "new-cap": "error",
        "no-throw-literal": "error",
        "no-negated-condition": "error",
        "no-trailing-spaces": ["error", {"skipBlankLines": true}],
        "no-unmodified-loop-condition": "error",
        "vars-on-top": "warn",
        "spaced-comment": ["error", "always"],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "space-infix-ops": ["error", {"int32Hint": false}],
        "keyword-spacing": ["error", {"before": true, "after": true, "overrides": {}}],
        "sort-imports": ["error", {
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],
        "comma-spacing": ["error", {"before": false, "after": true}],
        "constructor-super": "error",
        "arrow-parens": ["error", "always"],
        "arrow-spacing": "warn",
        "no-class-assign": "error",
        "no-this-before-super": "error",
        "no-dupe-class-members": "error",
        "no-var": "warn",
        "object-shorthand": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "warn",
        "no-useless-constructor": "error",
        "no-const-assign": "error"

    }


}
