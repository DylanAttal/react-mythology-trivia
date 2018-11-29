import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  render() {
    return (
      <main>
        <header>
          <h1>Mythology Trivia!</h1>
        </header>
        <div className="question-container">
          <h4>{this.state.game[0]['question']}</h4>
          <button className="incorrect-answer">
            {this.state.game[0]['incorrect_answers'][0]}
          </button>
          <button className="incorrect-answer">
            {this.state.game[0]['incorrect_answers'][1]}
          </button>
          <button className="incorrect-answer">
            {this.state.game[0]['incorrect_answers'][2]}
          </button>
          <button className="correct-answer">
            {this.state.game[0]['correct_answer']}
          </button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[1]['question']}</h4>
          <button>{this.state.game[1]['incorrect_answers'][0]}</button>
          <button>{this.state.game[1]['incorrect_answers'][1]}</button>
          <button>{this.state.game[1]['incorrect_answers'][2]}</button>
          <button>{this.state.game[1]['correct_answer']}</button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[2]['question']}</h4>
          <button>{this.state.game[2]['incorrect_answers'][0]}</button>
          <button>{this.state.game[2]['incorrect_answers'][1]}</button>
          <button>{this.state.game[2]['incorrect_answers'][2]}</button>
          <button>{this.state.game[2]['correct_answer']}</button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[3]['question']}</h4>
          <button>{this.state.game[3]['incorrect_answers'][0]}</button>
          <button>{this.state.game[3]['incorrect_answers'][1]}</button>
          <button>{this.state.game[3]['incorrect_answers'][2]}</button>
          <button>{this.state.game[3]['correct_answer']}</button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[4]['question']}</h4>
          <button>{this.state.game[4]['incorrect_answers'][0]}</button>
          <button>{this.state.game[4]['incorrect_answers'][1]}</button>
          <button>{this.state.game[4]['incorrect_answers'][2]}</button>
          <button>{this.state.game[4]['correct_answer']}</button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[5]['question']}</h4>
          <button>{this.state.game[5]['incorrect_answers'][0]}</button>
          <button>{this.state.game[5]['incorrect_answers'][1]}</button>
          <button>{this.state.game[5]['incorrect_answers'][2]}</button>
          <button>{this.state.game[5]['correct_answer']}</button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[6]['question']}</h4>
          <button>{this.state.game[6]['incorrect_answers'][0]}</button>
          <button>{this.state.game[6]['incorrect_answers'][1]}</button>
          <button>{this.state.game[6]['incorrect_answers'][2]}</button>
          <button>{this.state.game[6]['correct_answer']}</button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[7]['question']}</h4>
          <button>{this.state.game[7]['incorrect_answers'][0]}</button>
          <button>{this.state.game[7]['incorrect_answers'][1]}</button>
          <button>{this.state.game[7]['incorrect_answers'][2]}</button>
          <button>{this.state.game[7]['correct_answer']}</button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[8]['question']}</h4>
          <button>{this.state.game[8]['incorrect_answers'][0]}</button>
          <button>{this.state.game[8]['incorrect_answers'][1]}</button>
          <button>{this.state.game[8]['incorrect_answers'][2]}</button>
          <button>{this.state.game[8]['correct_answer']}</button>
        </div>
        <div className="question-container">
          <h4>{this.state.game[9]['question']}</h4>
          <button>{this.state.game[9]['incorrect_answers'][0]}</button>
          <button>{this.state.game[9]['incorrect_answers'][1]}</button>
          <button>{this.state.game[9]['incorrect_answers'][2]}</button>
          <button>{this.state.game[9]['correct_answer']}</button>
        </div>
      </main>
    )
  }
}

export default App
