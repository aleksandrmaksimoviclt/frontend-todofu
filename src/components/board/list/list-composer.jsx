import React from 'react';
import PropTypes from 'prop-types';

const ListComposer = (props) => {
  if (!props.listComposerIsOpen) {
    return (
      <div role="button" tabIndex="0" onClick={props.handleListComposerIsOpen} className="list-wrapper mod-add is-idle">
        <span className="placeholder">Add a list...</span>
      </div>
    );
  }
  return (
    <div className="list-wrapper mod-add">
      <input value={props.newListName} onChange={props.handleNewListNameChange} className="list-name-input" type="text" name="name" placeholder="Add a list..." autoComplete="off" dir="auto" maxLength="512" />
      <div className="list-add-controls">
        <input onClick={props.handlePostNewList} className="primary confirm mod-compact" type="submit" value="Add" />
        <a role="button" tabIndex="0" onClick={props.handleListComposerIsOpen} className="fa fa-times icon icon-lg">.</a>
      </div>
    </div>
  );
};

ListComposer.propTypes = {
  listComposerIsOpen: PropTypes.bool.isRequired,
  handleListComposerIsOpen: PropTypes.func.isRequired,
  handlePostNewList: PropTypes.func.isRequired,
  newListName: PropTypes.string.isRequired,
  handleNewListNameChange: PropTypes.func.isRequired,
};

export default ListComposer;
