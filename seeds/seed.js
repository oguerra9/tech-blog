const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    let posts = [];
    for (const post of postData) {
        let newPost = await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
        posts.push(newPost);
    }

    for (const comment of commentData) {
        await Comment.create({
            ...comment,
            post_id: posts[Math.floor(Math.random() * posts.length)].id,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();