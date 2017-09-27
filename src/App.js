import React, { Component } from 'react'

const Book = ({ book }) => (
    <div>Current book: {book.name} </div>
)

class App extends Component {
  constructor() {
    super()
    this.state = {
      book: { name: 'ulysses' },
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  updateBook = () => {
    this.setState({ book: null })
  }

  render() {
      if (this.state.hasError) {
        return <div>Oh no, something went wrong!</div>
      } else {
        return (
          <div style={{textAlign: 'center'}}>
            <Book book={this.state.book} />
            <button onClick={this.updateBook}>Update</button>
          </div>
        )
      }

  }
}

export default App;
