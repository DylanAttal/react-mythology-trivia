import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import Mob from './Mob'

class Question3 extends Component {
  render() {
    return (
      <div>
        <div className="question-container">
          <h4 dangerouslySetInnerHTML={{ __html: Mob.game[2]['question'] }} />
          <button
            onClick={Mob.answerQuestion}
            data-question={2}
            data-answer={3}
            className={Mob.answers[2] === 3 ? 'correct-answer' : ''}
          >
            {Mob.game[2]['correct_answer']}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={2}
            data-answer={0}
            className={Mob.answers[2] === 0 ? 'incorrect-answer' : ''}
          >
            {Mob.game[2]['incorrect_answers'][0]}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={2}
            data-answer={1}
            className={Mob.answers[2] === 1 ? 'incorrect-answer' : ''}
          >
            {Mob.game[2]['incorrect_answers'][1]}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={2}
            data-answer={2}
            className={Mob.answers[2] === 2 ? 'incorrect-answer' : ''}
          >
            {Mob.game[2]['incorrect_answers'][2]}
          </button>
          <Link to={'question4'}>
            <button className="next">Next Question!</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default observer(Question3)
