import React from 'react';
import axios from 'axios';


export default class ListComposer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listComposerIsOpen: false,
      newListName: '',
    };
  }

  handleListComposerIsOpen = () => {
    this.setState({listComposerIsOpen: !this.state.listComposerIsOpen});
  }

  handleNewListNameChange = (event) => {
    this.setState({newListName: event.target.value});
  }

  handleSubmitNewList = (listName) => {
    const self = this;
    let listObj = {
      "name": listName,
      "cards": []
    }
    axios
      .post("http://api.todofu.com/v1/lists/", listObj)
      .then(response => {
        this.handleListComposerIsOpen();
        window.location.reload();
      });
  }

  render() {
    if (!this.state.listComposerIsOpen) {
      return (
        <div onClick={this.handleListComposerIsOpen.bind(this)} className="list-wrapper mod-add is-idle">
          <span className="placeholder">Add a list...</span>
        </div>
      );
    } else {
      return (
        <div className="list-wrapper mod-add">
          <input value={this.state.newListTitle} onChange={this.handleNewListNameChange} className="list-name-input" type="text" name="name" placeholder="Add a list..." autoComplete="off" dir="auto" maxLength="512"></input>
          <div className="list-add-controls">
            <input onClick={() => this.handleSubmitNewList(this.state.newListName)} className="primary confirm mod-compact" type="submit" value="Add" />
            <a onClick={this.handleListComposerIsOpen.bind(this)} className="fa fa-times icon icon-lg" href="#"></a>
          </div>
        </div>
      )
    }
  }
}
