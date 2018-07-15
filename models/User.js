const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schaema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: "https://scontent.fewr1-3.fna.fbcdn.net/v/t31.0-8/906416_10103157316469369_986850834_o.jpg?_nc_cat=0&oh=ff1c6ad4081e24bae8e9cd57ced0b182&oe=5B8306B7"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);