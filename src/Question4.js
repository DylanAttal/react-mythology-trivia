import React, { Component } from 'react'

class Question4 extends Component {
  render() {
    return (
      <div className="question-container">
        <h4
          dangerouslySetInnerHTML={{ __html: this.props.game[3]['question'] }}
        />
        <button
          onClick={this.props.answerQuestion}
          data-question={3}
          data-answer={0}
          className={this.props.answers[3] === 0 ? 'incorrect-answer' : ''}
        >
          {this.props.game[3]['incorrect_answers'][0]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={3}
          data-answer={1}
          className={this.props.answers[3] === 1 ? 'incorrect-answer' : ''}
        >
          {this.props.game[3]['incorrect_answers'][1]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={3}
          data-answer={2}
          className={this.props.answers[3] === 2 ? 'incorrect-answer' : ''}
        >
          {this.props.game[3]['incorrect_answers'][2]}
        </button>
        <button
          onClick={this.props.answerQuestion}
          data-question={3}
          data-answer={3}
          className={this.props.answers[3] === 3 ? 'correct-answer' : ''}
        >
          {this.props.game[3]['correct_answer']}
        </button>
      </div>
    )
  }
}

export default Question4
