import React, { Component } from "react";
import { Row, Col, Typography, Button } from "antd";
import axios from "axios";
import { TwitterTweetEmbed } from "react-twitter-embed";

import HangmanLives from "./HangmanLives";

const { Title } = Typography;

class EndScreen extends Component {
  state = {
    tweets: [],
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        "/api/search-tweets/" + this.props.topic.query
      );
      console.log(res);
      this.setState({ tweets: res.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { didWin, topic } = this.props;
    const { tweets } = this.state;
    return (
      <div>
        <Row>
          <Col md={10}>
            <span style={{ textAlign: "left" }}>
              <Title level={1} style={{ textAlign: "" }}>
                {didWin ? "Nice work!" : "Game over."}
              </Title>
              <p>The solution was:</p>
              <Title level={1} style={{ "font-size": 70, color: "#1DA1F2" }}>
                {topic.name}
              </Title>
              <Button size="large" onClick={this.props.onReplayClicked}>
                Play Again
              </Button>{" "}
              <a href={topic.url} target="blank">
                <Button size="large">View Tweets</Button>
              </a>
            </span>
          </Col>
          <Col md={14}>
            <div style={{ columns: "2 auto" }}>
              {tweets.map((id) => {
                return <TwitterTweetEmbed tweetId={id} />;
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EndScreen;
