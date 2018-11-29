/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    
    attributes: {

        name: {
            type: 'string',
            required: true
        },

        phone: {
            type: 'number',
            required: true,
        },

        picture: {
            type: 'string',
            required: true,
        },

    },

};

