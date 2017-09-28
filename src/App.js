import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    // sendToErrorReportingService(error, info)
  }

  render () {
    if (this.state.hasError) {
      return <div>Oh no, something went wrong!</div>
    } else {
      return this.props.children
    }
  }
}

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
    this.setState({ hasError: true })
  }

  updateBook = () => {
    // In react 16^ the whole component will unmount the whole component tree meaning it'll disapear from user perspective
    // this behaviour has changed based on react team view that it's worse to leave corrupted UI in place than remove it totally
    this.setState({ book: null })
  }

  render() {
        return (
          <div style={{textAlign: 'center'}}>
            <ErrorBoundary>
              <Book book={this.state.book} />
              <button onClick={this.updateBook}>Update</button>
            </ErrorBoundary>
          </div>
        )
      }

}

export default App
