import React, { useState, useEffect } from 'react'
import { View, Text, Button, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import config from '../../config.json'
import QuestionModel from '../models/question-model'
import ImageModel from '../models/image-model'
import { RFValue } from 'react-native-responsive-fontsize'
import { setBg } from '../store/actions/level-action'
import { bindActionCreators } from 'redux'
import helper from '../helper'

function QuestionTitle(props) {
  const questionImageUri = ImageModel.normal(props.questions[props.level.index], 'card')

  return (
    <View style={styles.questionIndexAndQuestion}>
      <Text style={styles.questionIndex}>
        Question {props.level.index + 1}/{config.option}
      </Text>
      <Text style={styles.questionTitle}>{props.question.title}</Text>
      <View style={styles.containerImage}>
        <Image source={{ uri: questionImageUri }} style={styles.questionImage} resizeMode={'contain'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  questionIndexAndQuestion: {
    flex: 10,
    alignItems: 'center',
  },
  containerImage: {
    justifyContent: 'center',
    flex: 1,
  },
  questionImage: {
    height: Dimensions.get('window').height * 0.5,
    width: Dimensions.get('window').width * 0.5,
    aspectRatio: 1,
  },
  questionIndex: {
    fontSize: RFValue(16),
    color: 'orange',
    fontFamily: 'pusab',
  },
  questionTitle: {
    fontSize: RFValue(20),
    color: 'white',
    fontFamily: 'oswald',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ setBg }, dispatch)

const mapStateToProps = (state) => {
  const { level, questions } = state
  return { level, questions }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTitle)
