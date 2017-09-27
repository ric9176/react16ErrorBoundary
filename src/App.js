import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const Book = (props) => (
  <div>
    Current book: {props.book.name}
  </div>
)

class App extends Component {
  constructor() {
    super()
    this.state = {
      book: { name: 'ulysses' } }
  }

  updateBook = () => {
    this.setState({ book: null})
  }

  render() {
    return (
      <div className="App">
        <Book book={this.state.book} />
        <button onClick={this.updateBook}>Update</button>
      </div>
    );
  }
}

export default App;
