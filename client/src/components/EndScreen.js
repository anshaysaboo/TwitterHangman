import React, { Component } from "react";
import { Row, Col, Typography, Button } from "antd";

import HangmanLives from "./HangmanLives";

const { Title } = Typography;

class EndScreen extends Component {
  constructor(props) {
    super(props);
    // this.props.didWin
    // this.props.solution
    // this.props.onReplayClicked
    this.setState({ didWin: props.didWin, solution: props.solution });
  }

  render() {
    const { didWin, solution } = this.props;

    if (didWin) {
      return (
        <div>
          <Row>
            <Col md={16}>
              <Title level={1} style={{ textAlign: "center" }}>
                Congratulations! You won!
              </Title>
            </Col>
            <Col md={12}>
              <HangmanLives lives={6} />
              <br />
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          <Row>
            <Col md={16}>
              <Title level={1} style={{ textAlign: "center" }}>
                Game Over.
              </Title>
            </Col>
            <Col md={12}>
              <HangmanLives lives={0} />
              <br />
              <Title level={1}>The solution was:</Title>
              <Title level={2}>{this.props.solution}</Title>
              <Button size="large" onClick={this.props.onReplayClicked}>
                Play Again
              </Button>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default EndScreen;
