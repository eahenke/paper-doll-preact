/* eslint-disable import/no-commonjs */
module.exports = {
    extends: ['eslint-config/typescript'].map(require.resolve),
    rules: {
        'react/react-in-jsx-scope': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }
        ]
    }
};
