import React, { Component } from 'react'

class Question2 extends Component {
  render() {
    return (
      <div className="question-container">
        <h4
          dangerouslySetInnerHTML={{ __html: this.props.game[1]['question'] }}
        />
        <button
          onClick={this.props.answerQuestion}
          data-question={1}
          data-answer={0}
          className={this.props.answers[1] === 0 ? 'incorrect-answer' : ''}
        >
          {this.props.game[1]['incorrect_answers'][1]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={1}
          data-answer={1}
          className={this.props.answers[1] === 1 ? 'incorrect-answer' : ''}
        >
          {this.props.game[1]['incorrect_answers'][1]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={1}
          data-answer={2}
          className={this.props.answers[1] === 2 ? 'incorrect-answer' : ''}
        >
          {this.props.game[1]['incorrect_answers'][2]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={1}
          data-answer={3}
          className={this.props.answers[1] === 3 ? 'correct-answer' : ''}
        >
          {this.props.game[1]['correct_answer']}
        </button>
      </div>
    )
  }
}

export default Question2
