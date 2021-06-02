import { Component } from "react";
import Item from './Item';

class ItemList extends Component {
    render() {
        return (
            <ul>
                {this.props.todo1.map(todo => 
                    <Item key={todo.id}
                    {...todo} />
                    )}
            </ul>
        )
    }
}

export default ItemList;

