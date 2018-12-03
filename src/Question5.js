import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import Mob from './Mob'

class Question5 extends Component {
  render() {
    return (
      <div>
        <div className="question-container">
          <h4 dangerouslySetInnerHTML={{ __html: Mob.game[4]['question'] }} />
          <button
            onClick={Mob.answerQuestion}
            data-question={4}
            data-answer={0}
            className={Mob.answers[4] === 0 ? 'incorrect-answer' : ''}
          >
            {Mob.game[4]['incorrect_answers'][0]}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={4}
            data-answer={1}
            className={Mob.answers[4] === 1 ? 'incorrect-answer' : ''}
          >
            {Mob.game[4]['incorrect_answers'][1]}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={4}
            data-answer={2}
            className={Mob.answers[4] === 2 ? 'incorrect-answer' : ''}
          >
            {Mob.game[4]['incorrect_answers'][2]}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={4}
            data-answer={3}
            className={Mob.answers[4] === 3 ? 'correct-answer' : ''}
          >
            {Mob.game[4]['correct_answer']}
          </button>
        </div>
      </div>
    )
  }
}

export default observer(Question5)
