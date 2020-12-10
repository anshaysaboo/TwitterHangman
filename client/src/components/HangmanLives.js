import React, { Component } from "react";

import empty from "../images/Empty.png";
import head from "../images/Head.png";
import headBody from "../images/HeadBody.png";
import oneArm from "../images/OneArm.png";
import twoArm from "../images/TwoArm.png";
import oneLeg from "../images/OneLeg.png";
import twoLeg from "../images/TwoLeg.png";

// The HangmanLives components displays an appropriate image for the amount of lives the player has left.
// lives: the number of lives the player has left, determines what is displayed
class HangmanLives extends Component {
  constructor(props) {
    super(props);
    this.setState({ lives: props.lives });
  }

  render() {
    if (this.props.lives === 6) {
      return <img src={empty} alt="Hangman" style={{ height: "500px" }} />;
    } else if (this.props.lives === 5) {
      return <img src={head} alt="Hangman" style={{ height: "500px" }} />;
    } else if (this.props.lives === 4) {
      return <img src={headBody} alt="Hangman" style={{ height: "500px" }} />;
    } else if (this.props.lives === 3) {
      return <img src={oneArm} alt="Hangman" style={{ height: "500px" }} />;
    } else if (this.props.lives === 2) {
      return <img src={twoArm} alt="Hangman" style={{ height: "500px" }} />;
    } else if (this.props.lives === 1) {
      return <img src={oneLeg} alt="Hangman" style={{ height: "500px" }} />;
    } else {
      return <img src={twoLeg} alt="Hangman" style={{ height: "500px" }} />;
    }
  }
}

export default HangmanLives;
