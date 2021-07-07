import { Component } from "react";
import './Content.css';

class Content extends Component {
    render() {
        const paragraph = "This is a pragraph";
        return (
            <div className="content-area">
                <p>{paragraph}</p>
            </div>
        )
    }
}

export default Content;