import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./FriendCard.css";
import isEmpty from '../../validation/is-empty';


class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (

      <div className="card card-body bg-light mb-3">
        <div className="img-container">
          <img src={profile.user.avatar} alt="{profile.user.name}" />
        </div>
        <div className="content">

          <p>
            <div className='text-center'>
              <p>
                <strong>Name:</strong> {profile.user.name}
              </p>
              {isEmpty(profile.location) ? null : (
                <p>
                  <strong>Location:</strong> {profile.location}
                </p>
              )}
            </div>
          </p>
        </div>

      </div>

    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
