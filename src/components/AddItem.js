import { Component } from "react";

class AddItem extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick = {(e) => this.addItem(e)}>Add Item</button>
            </div>
        )
    }

    addItem(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

export default AddItem;