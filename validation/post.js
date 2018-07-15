const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.price = !isEmpty(data.price) ? data.price : '';
  data.number = !isEmpty(data.number) ? data.number : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.photo = !isEmpty(data.photo) ? data.photo : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Price field is required';
  }

  if (!Validator.isLength(data.description, { min: 10, max: 300 })) {
    errors.description = 'Description must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  if (Validator.isEmpty(data.number)) {
    errors.number = 'Number field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.photo)) {
    errors.photo = 'Photo field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }


  data.text = !isEmpty(data.text) ? data.text : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.price = !isEmpty(data.price) ? data.price : '';
  data.number = !isEmpty(data.number) ? data.number : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.photo = !isEmpty(data.photo) ? data.photo : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Price field is required';
  }

  if (!Validator.isLength(data.description, { min: 10, max: 300 })) {
    errors.description = 'Description must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  if (Validator.isEmpty(data.number)) {
    errors.number = 'Number field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.photo)) {
    errors.photo = 'Photo field is required';
  }

  if (!Validator.isMobilePhone(data.number)) {
    errors.email = 'Email is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
