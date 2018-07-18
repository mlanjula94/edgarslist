const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  ////Whats extended Description
  type: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  number: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  photo: {
    type: String,
    required: true,
    default: "https://scontent.fewr1-3.fna.fbcdn.net/v/t31.0-8/906416_10103157316469369_986850834_o.jpg?_nc_cat=0&oh=ff1c6ad4081e24bae8e9cd57ced0b182&oe=5B8306B7",
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }

})

module.exports = Post = mongoose.model('Post', postSchema);
