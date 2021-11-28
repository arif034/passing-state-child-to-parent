import "./styles.css";
import Child from "./Child";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Parent Message"
    };
  }
  render() {
    return (
      <div className="App">
        <Child message={this.state.message} />
      </div>
    );
  }
}
export default App;
