import "./styles.css";
import Child from "./Child";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Child />
      </div>
    );
  }
}
export default App;
