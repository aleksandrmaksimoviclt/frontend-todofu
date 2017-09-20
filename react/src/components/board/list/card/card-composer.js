import React from 'react';
import axios from 'axios';


export default class CardComposer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      openedCardComposerID: null,
      newCardTitle: '',
    };
  }

  openCardComposer = (listId) => {
    this.setState({
      openedCardComposerID: listId
    });
  };

  closeCardComposer = () => {
    this.setState({
      openedCardComposerID: null
    });
  };

  handleNewCardTilteChange = (event) => {
    console.log(event.target.value);
    this.setState({newCardTitle: event.target.value});
  }

  handleSubmitNewCard = (listId) => {
    let cardObj = {
      title: this.state.newCardTitle,
      list: listId
    }
    axios
      .post("http://api.todofu.com/v1/cards/", cardObj)
      .then(response => {
        this.closeCardComposer();
        window.location.reload();
      });
  }

  render() {
    if (this.props.listId === this.state.openedCardComposerID) {
      return (
        <div className="list-cards">
          <div className="card-composer">
            <div className="list-card">
              <div className="list-card-details">
                <textarea value={this.state.newCardTitle} onChange={this.handleNewCardTilteChange} className="list-card-composer-textarea"></textarea>
              </div>
            </div>
            <div className="card-composer-controls">
              <div className="card-composer-controls-section">
                <input onClick={() => this.handleSubmitNewCard(this.props.listId)} className="primary confirm mod-compact" type="submit" value="Add" />
                <a role="button" onClick={() => this.closeCardComposer()} className="fa fa-times icon icon-lg"></a>
              </div>
            </div>
          </div>
      </div>
      );
    } else {
      return (
        <a onClick={() => this.openCardComposer(this.props.listId)} className="open-card-composer">Add a card...</a>
      );
    }
  }
}
