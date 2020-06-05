import React, { useState, useEffect } from 'react'
import { View, Text, Button, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import config from '../../config.json'
import QuestionModel from '../models/question-model'
import { RFValue } from 'react-native-responsive-fontsize'
import AnswerOptions from '../components/AnswerOptions'
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
  }, [])

  useEffect(() => {
    props.setBg(props.questions[props.level.index].assets[0].fullAbsolutePath)
  }, [props.level.index])

  const questionImageUri = props.questions[props.level.index].assets[0].gameAbsolutePath

  return (
    <View style={styles.root}>
      <Text style={styles.questionIndex}>
        Question {props.level.index + 1}/{config.option}
      </Text>
      <Text style={styles.questionTitle}>{question.title}</Text>

      <Image source={{ uri: questionImageUri }} style={styles.questionImage} resizeMode={'contain'} />

      <AnswerOptions question={question} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 90,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  questionImage: {
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width * 0.6,
    aspectRatio: 1,
  },
  questionIndex: {
    fontSize: RFValue(16),
    color: '#777',
    textAlign: 'center',
  },
  questionTitle: {
    fontSize: RFValue(20),
    color: 'white',
    fontFamily: 'oswald',
    textAlign: 'center',
    padding: 10,
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ setBg }, dispatch)

const mapStateToProps = (state) => {
  const { level, questions } = state
  return { level, questions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
