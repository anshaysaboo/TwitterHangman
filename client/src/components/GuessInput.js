import React, { Component } from "react";
import { Input, Row, Alert } from "antd";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

// A GuessInput allows the user to input a letter into the HangmanGame
// Validates the field to ensure that letter has not already been guessed, or that it is only a single letter.
// PROPS:
// - onSubmit(String guess): Function, called when the input contains a valid letter guess
// - guessedLetters: Array of String lowercase letters that have already been guessed
class GuessInput extends Component {
  state = {
    error: "",
    text: "",
  };

  constructor(props) {
    super(props);

    this.isValidGuess = this.isValidGuess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  // Runs multiple checks to make sure that the user's guess is valid
  isValidGuess(guess) {
    guess = guess.toLowerCase();
    if (this.props.guessedLetters.includes(guess)) {
      this.setState({ error: "Already guessed this letter!" });
      return false;
    }
    if (guess.length !== 1) {
      this.setState({ error: "You can only guess one letter." });
      return false;
    }
    if (!ALPHABET.includes(guess)) {
      this.setState({ error: "Invalid letter." });
      return false;
    }

    this.setState({ error: "" });
    return true;
  }

  // Handles the user submitting their guess
  handleSubmit(guess) {
    if (this.isValidGuess(guess)) {
      this.props.onSubmit(guess.toLowerCase());
      this.setState({ text: "" });
    }
  }

  // Handles the text field updating, limits the user to only input one character into the field
  handleTextChange(e) {
    const text = e.target.value;
    if (text.length <= 1) {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        <Row>
          <Input.Search
            placeholder="Guess a letter"
            enterButton=">"
            size="large"
            limit={1}
            onSearch={this.handleSubmit}
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </Row>
        <Row>{error ? <Alert type="error" message={error} /> : null}</Row>
      </div>
    );
  }
}

export default GuessInput;
