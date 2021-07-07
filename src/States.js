import { Component } from "react";

class States extends Component {

    state = {
        states: []
    }

    componentDidMount() {
        const stateApiEndPoint = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';

        fetch(stateApiEndPoint).then((result) => result.json())
        .then((result) => {
            this.setState({
                states: result.states,
            })
        })
    }

    render() {
        const {states} = this.state

        const st = states.map((entry, index) => {
            return (<li key={index}>{entry.state_name}</li>)
        })

        return <ul>{st}</ul>
    }
}

export default States;