import React, { Component } from "react";

// The HangmanLives components displays an appropriate image for the amount of lives the player has left.
// lives: the number of lives the player has left, determines what is displayed
class HangmanLives extends Component {
  constructor(props) {
    super(props);
    this.setState({ lives: props.lives });
  }

  render() {
    return <h1>{this.props.lives} GUESSES LEFT</h1>;
  }
}

export default HangmanLives;
