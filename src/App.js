import { Component } from "react";
import Counter from "./components/Wrapper";
import './App.scss';


class App extends Component {
  render() {
    
    return (
      <div className="class1">
        <h1 className="App"> Redux example with a Counter</h1>
        <Counter />
      </div>
    )
  }
}



export default App;