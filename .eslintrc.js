/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// public
module.exports = {
    // base rules
    extends: require.resolve('spa-eslint-config/.eslintrc.js'),

    globals: {
        core: false,
        _: false
    },

    // override any settings from the "parent" configuration
    rules: {}
};
