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

  componentDidCatch(error, info) {
    console.log('error --->', error)
    console.log('info --->', info)
    this.setState({ hasError: true })
  }

  updateBook = () => {
    // In react 16^ the whole component will unmount the whole component tree meaning it'll disapear from user perspective
    // this behaviour has changed based on react team view that it's worse to leave corrupted UI in place than remove it totally
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
