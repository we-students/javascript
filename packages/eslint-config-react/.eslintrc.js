module.exports = {
    env: { browser: true, es2020: true },
    extends: [ 'plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
    plugins: [ 'react', 'react-hooks', 'prettier' ],
    globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {},
}
