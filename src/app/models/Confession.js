const BaseModel = require('./BaseModel');

class Confession extends BaseModel {
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['confession'],

            properties: {
                id: { type: 'integer' },
                confession: { type: 'string', minLength: 1, maxLength: 1024 }
            }
        };
    }
}

module.exports = Confession;
