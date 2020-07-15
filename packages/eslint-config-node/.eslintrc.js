module.exports = {
    env: {
        node: true,
        es6: true,
        mocha: true,
        mongo: true,
    },
    extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    rules: {},
}
