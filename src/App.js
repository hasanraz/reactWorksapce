import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Table from './Table'
import Form from './Form'
import States from './States'

class App extends Component {

  state = {
    profiles: [
    ],
  }

  handleSubmit = (profile) => {
    this.setState({
      profiles: [...this.state.profiles, profile]
    })
  }

  removeProfile = (index) => {
    const {profiles} = this.state

    this.setState({
      profiles: profiles.filter((profile, i) => {
        return i != index;
      })
    })
  }

  render() {

  const {profiles} = this.state
  
    return (
      <div className="background-content">
        <Table profiles={profiles} removeProfile={this.removeProfile}/>
        <Form handleSubmit={this.handleSubmit}/>
        <States />
      </div>
    );

  }
}

export default App;
