const { Post } = require('../models');

const postdata = [
    {
        title: 'JavaScript Facts',
        description: 'Along with HTML an CSS, JavaScript is one of the three main things of the www (World Wide Web). It enables interactive web pages and thus is an essential part of web applications.',
        user_id: 1
    },
    {
        title: 'Data Structures',
        description: 'A data structure is a particular way of organizing data in a computer so that it can be used effectively.',
        user_id: 2
    },
    {
        title: 'HTML',
        description: 'HTML stands for HyperText Markup Language. It is used to design web pages using the markup language. HTML is the combination of Hypertext and Markup language. ',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;