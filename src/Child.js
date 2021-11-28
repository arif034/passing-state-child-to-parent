import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childMessage: this.props.message
    };
  }
  onClickOfButton(props) {
    if (this.state.childMessage === this.props.message) {
      this.setState({
        childMessage: "Child Message"
      });
      console.log(this.state.childMessage);
    } else {
      this.setState({
        childMessage: "Parent Message"
      });
      console.log(this.state.childMessage);
    }
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <button onClick={() => this.onClickOfButton()}>Click Me</button>
        <br />
        <br />
        {this.state.childMessage}
      </div>
    );
  }
}
export default Child;
