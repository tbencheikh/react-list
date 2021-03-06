import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: [
      {
        name: 'Tahir',
        job: 'free electron',
      },
      {
        name: 'Sami',
        job: 'Bouncer',
      },
      {
        name: 'Fares',
        job: 'Aspring actress',
      },
      {
        name: 'Moh',
        job: 'Barmen',
      },
      {
        name: 'man ba3d makla ach ngolo',
        job: 'wino attay',
      },
    ]
  }

  removeCharacter = index => {
    const { characters } = this.state;
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state;
  
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App