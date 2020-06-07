import React, { useEffect } from 'react'
import { View, Text, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { RFValue } from 'react-native-responsive-fontsize'
import helper from '../helper'
import { Button } from 'react-native-elements'
import { nextQuestion, makeAnswer } from '../store/actions/level-action'
import { bindActionCreators } from 'redux'

function AnswerOptions(props) {
  const onAnswer = (answerOption) => {
    props.nextQuestion()
    props.makeAnswer(answerOption)
  }

  return (
    <View style={styles.root}>
      {props.question.answerOptions.map((answerOption) => (
        <Button
          key={answerOption}
          title={answerOption}
          containerStyle={StyleSheet.flatten(styles.btnContainer)}
          buttonStyle={StyleSheet.flatten(styles.btn)}
          titleStyle={StyleSheet.flatten(styles.btnTitle)}
          onPress={() => onAnswer(answerOption)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: helper.heightPercentageToDP(3),
  },
  btnContainer: {
    flexGrow: 1,
    marginRight: helper.widthPercentageToDP(4),
    marginLeft: helper.widthPercentageToDP(4),
    marginBottom: helper.heightPercentageToDP(1),
  },
  btn: {
    backgroundColor: '#FF6347',
    borderBottomColor: '#bc1c00',
    borderBottomWidth: 3,
    paddingLeft: helper.widthPercentageToDP(2),
    paddingRight: helper.widthPercentageToDP(2),
  },
  btnTitle: {
    color: 'white',
    fontSize: RFValue(15),
    fontFamily: 'montserrat',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ nextQuestion, makeAnswer }, dispatch)

const mapStateToProps = (state) => {
  const { level } = state
  return { level }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions)
