import { Component } from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    
    const rows = props.profilesArray.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.gender}</td>
                <td><button onClick={() => props.removeProfile(index)}>Delete</button></td>
            </tr>
        )
    })
    
    return(
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component {
    render() {

        const {profiles, removeProfile} = this.props

        return (
            <table>
                <TableHeader />
                <TableBody profilesArray={profiles} removeProfile={removeProfile}/>
            </table>
                
        )
    }
}

export default Table;