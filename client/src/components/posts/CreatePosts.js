import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      description: '',
      price: '',
      number: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      title: this.state.title,
      email: user.email,
      name: user.name,
      type: this.state.type,
      description: this.state.description,
      price: this.state.price,
      number: this.state.number,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for status
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Electronics', value: 'Electronics' },
      { label: 'Tools', value: 'Tools' },
      { label: 'Furniture', value: 'Furniture' },
      { label: 'Cars+Trucks', value: 'Cars+Trucks' },
      { label: 'Others', value: 'Others' }
    ];


    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create A Post</h1>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="* Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    error={errors.title}
                    info="Add a title to your post."
                  />
                  <TextAreaFieldGroup
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    error={errors.description}
                  />
                  <SelectListGroup
                    placeholder="Type"
                    name="Type"
                    value={this.state.Type}
                    onChange={this.onChange}
                    options={options}
                    error={errors.Type}
                    info="Give us an idea of what kind of a item you are selling"
                  />
                  <TextFieldGroup
                    placeholder="Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    error={errors.price}
                    info="Give us an expected price"
                  />
                  <TextAreaFieldGroup
                    placeholder="Quantity"
                    name="number"
                    value={this.state.number}
                    onChange={this.onChange}
                    error={errors.number}
                  />

                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
              </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
