import React from "react";
import { Row, Col } from "antd";

import HangmanGame from "./components/HangmanGame.js";
import { getRandomTopic } from "./util/getRandomTopic.js";

// App is the main component that handles rendering and navigation of the rest of the application
class App extends React.Component {
  state = {
    topicName: "",
  };

  async componentDidMount() {
    try {
      const topic = await getRandomTopic();
      this.setState({ topicName: topic.name });
    } catch (err) {
      console.error(err);
    }
  }

  handleGameFinish(didWin) {
    if (didWin) {
      alert("Congratulations, you won!");
    } else {
      alert("Oops, you lost!");
    }
  }

  render() {
    const { topicName } = this.state;
    return (
      <Row>
        <Col span={20} offset={2}>
          <center>
            <br />
            {topicName ? (
              <HangmanGame
                solution={topicName}
                onFinish={this.handleGameFinish}
              />
            ) : null}
          </center>
        </Col>
      </Row>
    );
  }
}

export default App;
