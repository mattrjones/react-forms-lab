import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "Tweet Here"
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.tweet}/>
        Remaining Characters: {this.props.maxChars - this.state.tweet.length} / {this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
