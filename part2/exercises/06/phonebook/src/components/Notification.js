import React from 'react';

const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }

  let color = "success";
  if (notification.isFailure) {
    color = "failure";
  }

  return (
    <div className={`notification ${color}`}>{notification.message}</div>
  );
};

export default Notification;
