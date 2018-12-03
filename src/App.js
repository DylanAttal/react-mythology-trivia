import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import './App.css'

import Mob from './Mob'
import StartGame from './StartGame'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Question5 from './Question5'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple'
      )
      .then(response => {
        Mob.game = response.data.results
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Router>
        <main>
          <header>
            <h1>Mythology Trivia!</h1>
          </header>
          <Route path="/" exact component={StartGame} />
          <Route path="/question1" exact component={Question1} />
          <Route path="/question2" exact component={Question2} />
          <Route path="/question3" exact component={Question3} />
          <Route path="/question4" exact component={Question4} />
          <Route path="/question5" exact component={Question5} />
        </main>
      </Router>
    )
  }
}

export default observer(App)
