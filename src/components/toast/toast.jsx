import React from 'react';
import PropTypes from 'prop-types';


import './toast.css';

class Toast extends React.Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    dismissToast: PropTypes.func.isRequired,
  }

  componentWillMount() {
    setTimeout(() => this.props.dismissToast(this.props), 5000);
  }

  render() {
    return (
      <div className="toast-body">
        <div className="toast-text">
          <span>{this.props.message}</span>
        </div>
        <div className="toast-action">
          <input className="primary confirm mod-compact" type="submit" value="Undo"></input>
        </div>
        <div className="toast-close">
          <i onClick={() => this.props.dismissToast(this.props)} className="fa fa-times icon" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
};

export default Toast;
