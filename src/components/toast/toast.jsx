import React from 'react';
import PropTypes from 'prop-types';


import './toast.css';

const Toast = props => (
  <div className="toast-body">
    <div className="toast-text">
      <span>{props.toastText}</span>
    </div>
    <div className="toast-action">
      <input className="primary confirm mod-compact" type="submit" value="Undo"></input>
    </div>
    <div className="toast-close">
      <i className="fa fa-times icon" aria-hidden="true"></i>
    </div>
  </div>
);

Toast.propTypes = {
  toastText: PropTypes.string.isRequired,
}

export default Toast;
