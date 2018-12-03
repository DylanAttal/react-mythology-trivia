import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import Mob from './Mob'

class StartGame extends Component {
  render() {
    return (
      <div className="start-div">
        <Link to={'/question1'}>
          <button className="start">Start the Game!</button>
        </Link>
      </div>
    )
  }
}

export default observer(StartGame)
