import React, { Component } from 'react'

class Question extends Component {
  render() {
    return (
      <div className="question-container">
        <h4
          dangerouslySetInnerHTML={{ __html: this.props.game[0]['question'] }}
        />
        <button
          onClick={this.props.answerQuestion}
          data-question={0}
          data-answer={0}
          className={this.props.answers[0] === 0 ? 'incorrect-answer' : ''}
        >
          {this.props.game[0]['incorrect_answers'][0]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={0}
          data-answer={1}
          className={this.props.answers[0] === 1 ? 'incorrect-answer' : ''}
        >
          {this.props.game[0]['incorrect_answers'][1]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={0}
          data-answer={2}
          className={this.props.answers[0] === 2 ? 'incorrect-answer' : ''}
        >
          {this.props.game[0]['incorrect_answers'][2]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={0}
          data-answer={3}
          className={this.props.answers[0] === 3 ? 'correct-answer' : ''}
        >
          {this.props.game[0]['correct_answer']}
        </button>
      </div>
    )
  }
}

export default Question
