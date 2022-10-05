const blogpost = require('express').Router();
const { Blogpost } = require('../../models');
const withAuth = require('../../utils/auth');

blogpost.post('/', withAuth, async (req, res) => {
    try {
        const newBlogpost = await Blogpost.create({
            // ******************************************
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlogpost);
    } catch (err) {
        res.status(400).json(err);
    }
});

blogpost.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedBlogpost = await Blogpost.update(
            {
                 title: req.body.title,
                 contents: req.body.contents,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        res.status(200).json(updatedBlogpost);
    } catch (err) {
        res.status(400).json(err);
    }
});

blogpost.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogpostData = await Blogpost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogpostData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = blogpost;