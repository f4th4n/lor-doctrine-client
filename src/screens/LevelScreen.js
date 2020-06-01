import React, { useEffect } from 'react'
import { View, Text, Button, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../config.json'
import Header from '../components/Header'
import Tutorial from '../components/Tutorial'
import Question from '../components/Question'
import { setQuestions } from '../store/actions/question-action'
import { tutorialFinished } from '../store/actions/tutorial-action'

function LevelScreen(props) {
  useEffect(() => {
    props.setQuestions()
  }, [])

  useEffect(() => {
    for (let question of props.questions) {
      Image.prefetch(question.assets[0].gameAbsolutePath)
    }
  }, [props.questions])

  useEffect(() => {
    if (props.tutorial.index > config.tutorial.cardCount) {
      props.tutorialFinished()
    }
  }, [props.tutorial.index])

  return (
    <View style={styles.root}>
      <Header />
      {!props.tutorial.finished && <Tutorial />}
      {props.tutorial.finished && <Question />}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: config.color.secondary,
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ setQuestions, tutorialFinished }, dispatch)

const mapStateToProps = (state) => {
  const { tutorial, questions } = state
  return { tutorial, questions }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelScreen)
