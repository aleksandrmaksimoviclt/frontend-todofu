import React from 'react';
import PropTypes from 'prop-types';


import './toast.css';

const Toast = props => (
  <div className="toast-body">
    <div className="toast-text">
      <span>{props.message}</span>
    </div>
    <div className="toast-action">
      <input className="primary confirm mod-compact" type="submit" value="Undo"></input>
    </div>
    <div className="toast-close">
      <i onClick={() => props.dismissToast(props)} className="fa fa-times icon" aria-hidden="true"></i>
    </div>
  </div>
);

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  dismissToast: PropTypes.func.isRequired,
}

export default Toast;
