const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
    },
    {
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password1234'
    },
    {
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password1235'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;