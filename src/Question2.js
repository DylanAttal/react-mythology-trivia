import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import Mob from './Mob'

class Question2 extends Component {
  render() {
    return (
      <div>
        <div className="question-container">
          <h4 dangerouslySetInnerHTML={{ __html: Mob.game[1]['question'] }} />
          <button
            onClick={Mob.answerQuestion}
            data-question={1}
            data-answer={0}
            className={Mob.answers[1] === 0 ? 'incorrect-answer' : ''}
          >
            {Mob.game[1]['incorrect_answers'][1]}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={1}
            data-answer={1}
            className={Mob.answers[1] === 1 ? 'incorrect-answer' : ''}
          >
            {Mob.game[1]['incorrect_answers'][0]}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={1}
            data-answer={3}
            className={Mob.answers[1] === 3 ? 'correct-answer' : ''}
          >
            {Mob.game[1]['correct_answer']}
          </button>
          <button
            onClick={Mob.answerQuestion}
            data-question={1}
            data-answer={2}
            className={Mob.answers[1] === 2 ? 'incorrect-answer' : ''}
          >
            {Mob.game[1]['incorrect_answers'][2]}
          </button>
          <Link to={'/question3'}>
            <button className="next">Next Question!</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default observer(Question2)
