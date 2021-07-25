const BaseModel = require('./BaseModel');

class Confession extends BaseModel {
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['confession'],

            properties: {
                id: { type: 'integer' },
                confession: { type: 'string', minLength: 1, maxLength: 1024 },
                replies: {
                    type: 'object',

                    properties: {
                        confession_id: { type: 'integer' },
                        reply: { type: 'string' }
                    }
                }
            }
        };
    }
    static get relationMappings() {
        return {
            replies: {
                relation: BaseModel.HasManyRelation,
                modelClass: 'ConfessionReply',
                join: {
                    from: 'confessions.id',
                    to: 'confession_replies.confession_id'
                }
            }
        }
    }
}

module.exports = Confession;
