const comment = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// create new comment
comment.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// edit comment by id
comment.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedComment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


// delete comment by id
comment.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = comment;