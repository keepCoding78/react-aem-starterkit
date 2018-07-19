import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAllNotification } from '../../actions/notifications';

class NotificationList extends Component {

  getNotificationCount = notifications => {
    return notifications.length;
  };

  getNotificationList = notifications => {
    return notifications.map((notification, i) => {
      return (
        <ul key={i}>
          <li>{notification.label}</li>
        </ul>
      );
    });
  };

  render() {
    return (
      <div className="component-wrapper notifications">
        <strong>{this.getNotificationCount(this.props.notifications)} items needs your attention</strong>
        <ul>{this.getNotificationList(this.props.notifications)}</ul>
        <button type="button" onClick={() => this.props.onClearAllNotification()}>Clear All</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClearAllNotification: () => {
      dispatch(clearAllNotification());
    }
  };
};

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);