/* eslint-disable import/no-commonjs */
module.exports = {
    extends: ['eslint-config/typescript'].map(require.resolve),
    rules: {
        'react/react-in-jsx-scope': 0
    }
};
