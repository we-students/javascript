module.exports = {
    env: {
        node: true,
        es6: true,
        mocha: true,
        mongo: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    plugins: [],
    rules: {},
}
