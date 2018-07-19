import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotificationCount extends Component {
  getNotificationCount = notifications => {
    return notifications.length;
  };

  render() {
    return (
      <p style={{ float: 'right' }}>
        <strong>{this.props.config.labels.notifications}</strong> ({this.getNotificationCount(this.props.notifications)})
      </p>
    );
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

export default connect(mapStateToProps)(NotificationCount);
