const BaseModel = require('./BaseModel');

class ConfessionReply extends BaseModel {
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['reply'],

            properties: {
                id: { type: 'integer' },
                confession_id: { type: 'integer' },
                parent_id: { type: 'integer' },
                reply: { type: 'string', minLength: 1, maxLength: 1024 },
            }
        };
    }

    static relationMappings = {
        confession: {
            relation: BaseModel.BelongsToOneRelation,
            modelClass: 'Confession',
            join: {
                from: 'confession_replies.confession_id',
                to: 'confessions.id'
            }
        }
    };
}

module.exports = ConfessionReply;
