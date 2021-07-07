import { Component } from "react";

export default class Counter extends Component {
    render() {
        const {counter, increment, decrement, reset} = this.props;
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick = {increment} >INCREMENT BY 1</button>
                <button onClick = {decrement}>DECREMENT BY 1</button>
                <button onClick = {reset}>RESET</button>
            </div>
        )
    }
}



