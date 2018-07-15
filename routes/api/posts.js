const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");     //For protected routes
var formidable = require('formidable');
var cloudinary = require('cloudinary');
require('dotenv').config();


// Post model
const Post = require('../../models/Post');

// Validation
const validatePostInput = require('../../validation/post');


//Cloudinary configeration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// @route GET api/posts/test
// @desc  Tests posts route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err =>
        res.status(404).json({ nopostfound: 'No post found with that ID' })
      );
  });

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    // Create a new instance of formidable to handle the request info
    var form = new formidable.IncomingForm();

    // parse information for form fields and incoming files
    form.parse(req, function (err, fields, files) {
      cloudinary.uploader.upload(files.photo.path, function (result) {
        console.log(JSON.stringify(result));

        const newPost = new Post({
          title: fields.title,
          description: fields.description,
          photo: result.secure_url,
          price: fields.price,
          number: fields.number,
          email: fields.email,
          userId: fields.userId,
        });
        newPost.save().then(post => res.json(post));
      })
    })


  }
);

//patch an existing one
router.patch("/:id", passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // Get fields
    const postFields = {};
    postFields.user = req.user.id;

    if (req.body.title) postFields.title = req.body.title;
    if (req.body.description) postFields.description = req.body.description;
    if (req.body.price) postFields.price = req.body.price;
    if (req.body.number) postFields.number = req.body.number;
    if (req.body.email) postFields.email = req.body.email;

    Post.findOneAndUpdate(
      { post: req.post_id },
      { $set: postFields },
      { new: true }
      , req.body).then(() => res.json({
        result: "success"
      }));
  });

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete("/:id", passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findOneAndRemove({ _id: req.params.id }).then(() => res.json({
      result: "success"
    }));
  });

module.exports = router;