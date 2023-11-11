const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Post = require('../models/post');

router.post('/:postId/respuesta', async (req, res) => {
    try {
        let post = await Post.findById(req.params.postId);

        if (!post) return res.status(404).json({ message: 'Posteo no encontrado' });

        console.log(req.body.repliedBy);
        post.respuestas.push({
            content: req.body.content,
            repliedBy: req.body.repliedBy,
            date: Date.now()
        });
        
        await post.save();

        post = await Post.findById(req.params.postId)
            .populate('postedBy');
        
        console.log(post);
        
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;