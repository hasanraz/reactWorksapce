import { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "./actions/actions";
import AddItem from './components/AddItem';
import ItemList from "./components/ItemList";

class App extends Component {
  render() {
    const { dispatch, visibleTodos} = this.props
    return (
      <div>
        <AddItem onAddClick={text => dispatch(addItem(text))} ></AddItem>
        <ItemList todo1 = {visibleTodos}/>
      </div>
    )
  }
}

function select(state) {
  return {
    visibleTodos: state.todo1
  }
}


export default connect(select)(App);