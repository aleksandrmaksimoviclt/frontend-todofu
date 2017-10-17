import React from 'react';
import PropTypes from 'prop-types';

import Toast from './toast';
import './toast-container.css';

const ToastContainer = (props) => {

  const toastes = props.toastes.map(toast => (
    <Toast
      key={toast.id}
      id={toast.id}
      message={toast.message}
      dismissToast={props.dismissToast}
    />
  ));

  return(
    <div className="toast-container">
      {toastes}
    </div>
  )
};

ToastContainer.propTypes = {
  toastes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  dismissToast: PropTypes.func.isRequired,
}

export default ToastContainer;
