const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Blogpost, {
    through: {
        model: Comment,
    },
    as: 'comments'
});

// Comment.belongsTo(Blogpost, {
//     foreignKey: 'blogpost_id'
// });

// Blogpost.hasMany(Comment, {
//     foreignKey: 'blogpost_id',
//     onDelete: 'CASCADE'
// });

// Comment.hasOne(User, {
//     foreignKey: 'user_id'
// });

module.exports = { User, Blogpost, Comment };