const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
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