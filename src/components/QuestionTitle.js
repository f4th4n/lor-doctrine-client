import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import config from '../../config.json'
import ImageModel from '../models/image-model'
import { RFValue } from 'react-native-responsive-fontsize'
import { setBg } from '../store/actions/level-action'
import { bindActionCreators } from 'redux'

function QuestionTitle(props) {
  const question = props.questions[props.level.index]
  const questionImageUri = ImageModel.normal(question, 'card')
  const isCard = !questionImageUri.includes('-full')

  return (
    <View style={styles.questionIndexAndQuestion}>
      <Text style={styles.questionIndex}>
        Question {props.level.index + 1}/{config.questionCount}
      </Text>
      <Text style={styles.questionTitle}>{props.question.title}</Text>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: questionImageUri }}
          style={isCard ? styles.questionImageHalf : styles.questionImageAlmostFull}
          resizeMode={'contain'}
        />
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
  questionImageHalf: {
    height: Dimensions.get('window').height * 0.5,
    width: Dimensions.get('window').width * 0.5,
    aspectRatio: 1,
  },
  questionImageAlmostFull: {
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
