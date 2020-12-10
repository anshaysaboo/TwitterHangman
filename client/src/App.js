import React from "react";
import { Row, Col } from "antd";

import HangmanGame from "./components/HangmanGame.js";
import EndScreen from "./components/EndScreen.js";
import { getRandomTopic } from "./util/getRandomTopic.js";

// App is the main component that handles rendering and navigation of the rest of the application
class App extends React.Component {
  state = {
    topicName: "",
    isPlayingGame: true,
    didWin: false,
  };

  constructor(props) {
    super(props);
    this.handleGameFinish = this.handleGameFinish.bind(this);
    this.handleReplayClicked = this.handleReplayClicked.bind(this);
  }

  async componentDidMount() {
    this.reloadGame();
  }

  async reloadGame() {
    try {
      const topic = await getRandomTopic();
      this.setState({ topicName: topic.name });
    } catch (err) {
      console.error(err);
    }
  }

  handleGameFinish(didWin) {
    this.setState({ didWin, isPlayingGame: false });
  }

  handleReplayClicked() {
    this.setState({ isPlayingGame: true, topicName: "" });
    this.reloadGame();
  }

  renderGame() {
    const { topicName, isPlayingGame, didWin } = this.state;
    if (isPlayingGame) {
      return topicName ? (
        <HangmanGame solution={topicName} onFinish={this.handleGameFinish} />
      ) : null;
    } else {
      return (
        <EndScreen
          solution={topicName}
          didWin={didWin}
          onReplayClicked={this.handleReplayClicked}
        />
      );
    }
  }

  render() {
    return (
      <Row>
        <Col span={20} offset={2}>
          <center>
            <br />
            {this.renderGame()}
          </center>
        </Col>
      </Row>
    );
  }
}

export default App;
