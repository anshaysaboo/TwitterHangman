import React, { Component } from "react";
import { Row, Col, Typography } from "antd";

import HangmanLives from "./HangmanLives.js";
import GuessInput from "./GuessInput.js";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const { Title } = Typography;

// The HangmanGame component manages the state of the Hangman game being played
// Props:
// - solution: the solution to the hangman game to be played
// - onFinish(boolean didWin): Function, called when the game is finished, didWin represents whether or not the user won the game
class HangmanGame extends Component {
  constructor(props) {
    super(props);

    const solution = props.solution.toLowerCase();
    let template = [];
    for (let i = 0; i < solution.length; i++) {
      let curChar = solution.substring(i, i + 1).toLowerCase();
      if (ALPHABET.includes(curChar)) {
        template.push("_");
      } else {
        template.push(curChar);
      }
    }

    console.log(template);

    this.state = {
      solution,
      template,
      guessedLetters: [],
      lives: 6,
    };

    this.handleGuess = this.handleGuess.bind(this);
    this.checkGameOver = this.checkGameOver.bind(this);
  }

  // Updates the UI and puzzle progress based on the guess made
  handleGuess(guess) {
    let { guessedLetters, template, lives, solution } = this.state;
    guessedLetters.push(guess);

    if (solution.includes(guess)) {
      for (let i = 0; i < solution.length; i++) {
        if (solution.substring(i, i + 1) === guess) {
          template[i] = guess;
        }
      }
    } else {
      lives -= 1;
    }

    this.setState({ guessedLetters, template, lives });
    this.checkGameOver();
  }

  // Checks if the game has finished, either the user won or lost. Is called after every guess is made
  checkGameOver() {
    const { lives, template } = this.state;
    // Check if the user has run out of guesses, resulting in a loss
    if (lives === 0) {
      this.props.onFinish(false);
    }

    // Check if the user has filled out the template, and won
    var didWin = true;
    for (let i = 0; i < template.length; i++) {
      if (template[i] === "_") {
        didWin = false;
      }
    }
    if (didWin) {
      this.props.onFinish(true);
    }
  }

  // Returns a String representing the puzzle template at its current state
  renderPuzzleTemplate() {
    return this.state.template.map((letter) => {
      if (letter === " ") {
        return <span style={{ color: "white" }}>_</span>;
      } else {
        return letter + " ";
      }
    });
  }

  // Returns a String representation of the currently guessed letters
  renderGuessedLetters() {
    return this.state.guessedLetters.join(" ");
  }

  render() {
    const { lives, guessedLetters } = this.state;
    return (
      <div>
        <Row justify="space-around" align="middle">
          <Col md={12}>
            <Title level={1} style={{ textAlign: "left" }}>
              Find the Trending Twitter topic.
            </Title>
            <GuessInput
              guessedLetters={guessedLetters}
              onSubmit={this.handleGuess}
            />
          </Col>

          <Col md={12}>
            <HangmanLives lives={lives} />
            <br />
            <Title level={1}>{this.renderPuzzleTemplate()}</Title>
            <h3>{this.renderGuessedLetters()}</h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HangmanGame;
