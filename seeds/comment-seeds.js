const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Along with HTML an CSS, JavaScript is one of the three main things of the www (World Wide Web).',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Like all other scripting languages, arrays and objects can be created with a brief shortcut syntax.',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'JavaScript supports regular expressions in a manner similar to Perl.',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;