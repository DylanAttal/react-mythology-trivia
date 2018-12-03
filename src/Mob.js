import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

class Mob {
  constructor() {
    this.game = [
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

    // Make answers an array of undefined elements as long as there are questions in the game
    // that way, observers can see the answer change
    this.answers = this.game.map(question => undefined)
  }

  answerQuestion = event => {
    const questionIndex = parseInt(event.target.dataset.question)
    const answerIndex = parseInt(event.target.dataset.answer)

    this.answers[questionIndex] = answerIndex
  }
}

decorate(Mob, {
  answers: observable,
  game: observable
})

export default new Mob()
