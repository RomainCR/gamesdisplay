import React, { Component } from 'react';

class Promo extends Component {

  render() {
    const { location } = this.props;
    return (
      <div>
        <img src={location.state.game.promo} alt={location.state.game.name} />
      </div>
    );
  }
}

export default Promo;