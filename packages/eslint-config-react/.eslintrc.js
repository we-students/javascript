module.exports = {
    env: { browser: true, es2020: true },
    extends: [ 'airbnb', 'prettier', 'plugin:prettier/recommended', 'plugin:react/recommended'],
    plugins: [ 'react', 'react-hooks', 'prettier' ],
    globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {},
}
