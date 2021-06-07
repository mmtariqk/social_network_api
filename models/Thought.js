
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

// Here's thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        // Here tying reactions to thought
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// To get total count of friends
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


// To create the User model using the UserSchema
const Thought = model('Thought', thoughtSchema);


// To export the User model
module.exports = { Thought };