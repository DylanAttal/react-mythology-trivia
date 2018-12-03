import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Question5 from './Question5'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: [],
      game: [
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' },
        { question: '', incorrect_answers: [''], correct_answer: '' }
      ]
    }
  }

  componentDidMount = () => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple'
      )
      .then(response => {
        this.setState({
          game: response.data.results
        })
      })
      .catch(error => console.log(error))
  }

  answerQuestion = event => {
    const questionIndex = parseInt(event.target.dataset.question)
    const answerIndex = parseInt(event.target.dataset.answer)

    let answers = this.state.answers
    answers[questionIndex] = answerIndex

    this.setState({
      answers: answers
    })
    console.log(answers)
  }

  render() {
    return (
      <main>
        <header>
          <h1>Mythology Trivia!</h1>
        </header>
        <Question1
          game={this.state.game}
          answers={this.state.answers}
          answerQuestion={this.answerQuestion}
        />
        <Question2
          game={this.state.game}
          answers={this.state.answers}
          answerQuestion={this.answerQuestion}
        />
        <Question3
          game={this.state.game}
          answers={this.state.answers}
          answerQuestion={this.answerQuestion}
        />
        <Question4
          game={this.state.game}
          answers={this.state.answers}
          answerQuestion={this.answerQuestion}
        />
        <Question5
          game={this.state.game}
          answers={this.state.answers}
          answerQuestion={this.answerQuestion}
        />
      </main>
    )
  }
}

export default App
