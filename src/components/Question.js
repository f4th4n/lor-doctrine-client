import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import QuestionModel from '../models/question-model'
import ImageModel from '../models/image-model'
import AnswerOptions from '../components/AnswerOptions'
import QuestionTitle from '../components/QuestionTitle'
import { setBg } from '../store/actions/level-action'
import { bindActionCreators } from 'redux'

function Question(props) {
  const defaultQuestion = {
    questionType: null,
    title: '...',
    answerOptions: [],
    correctAnswer: null,
  }

  const [question, setQuestion] = useState(defaultQuestion)

  useEffect(() => {
    const row = props.questions[props.level.index]
    setQuestion(QuestionModel.generateFromRow(row))

    props.setBg(ImageModel.normal(props.questions[props.level.index], 'bg'))
  }, [props.level.index])

  return (
    <View style={styles.root}>
      <QuestionTitle question={question} />
      <AnswerOptions question={question} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 95,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ setBg }, dispatch)

const mapStateToProps = (state) => {
  const { level, questions } = state
  return { level, questions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
