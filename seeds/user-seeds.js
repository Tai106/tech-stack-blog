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
    },
    {
    username: 'tai106',
    email: 'itsme@gotcha.com',
    password: 'password12356'
    },
    {
    username: 'kathy105',
    email: 'xoxoxo@aol.com',
    password: 'password123567'
    },
    {
        username: 'dori104',
        email: 'xyxyxy@aol.com',
        password: 'password1235678'
        },

    ];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;