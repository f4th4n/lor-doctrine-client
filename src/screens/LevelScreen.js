import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../config.json'
import Header from '../components/Header'
import Tutorial from '../components/Tutorial'
import Question from '../components/Question'
import { setQuestions } from '../store/actions/question-action'
import { tutorialFinished } from '../store/actions/tutorial-action'
import ImageModel from '../models/image-model'

function LevelScreen(props) {
  useEffect(() => {
    props.setQuestions()
    props.tutorialFinished() // skip tutorial
  }, [])

  useEffect(() => {
    for (let question of props.questions) {
      Image.prefetch(ImageModel.normal(question, 'card'))
      Image.prefetch(ImageModel.normal(question, 'bg'))
    }
  }, [props.questions])

  useEffect(() => {
    if (props.tutorial.index > config.questionCount) {
      props.tutorialFinished()
    }
  }, [props.tutorial.index])

  useEffect(() => {
    if (props.level.index === config.questionCount) {
      props.navigation.navigate('ScoreScreen')
    }
  }, [props.level.index])

  const scorePage = props.level.index === config.questionCount
  const showTutorial = !scorePage && !props.tutorial.finished
  const showQuestion = !scorePage && props.tutorial.finished

  return (
    <View style={styles.root}>
      <Image source={{ uri: props.level.bg }} style={styles.bgImage} />
      <Header navigation={props.navigation} />
      {showTutorial && <Tutorial />}
      {showQuestion && <Question />}
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
  bgImage: {
    width: '100%',
    height: '100%',
    opacity: 0.1,
    position: 'absolute',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ setQuestions, tutorialFinished }, dispatch)

const mapStateToProps = (state) => {
  const { tutorial, questions, level } = state
  return { tutorial, questions, level }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelScreen)
