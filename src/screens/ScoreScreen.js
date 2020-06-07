import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import ScoreModel from '../models/score-model'
import { setBg } from '../store/actions/level-action'
import { bindActionCreators } from 'redux'
import helper from '../helper'
import { Button } from 'react-native-elements'
import { RFValue } from 'react-native-responsive-fontsize'
import config from '../../config'

function ScoreScreen(props) {
  const [score, setScore] = useState(0)

  useEffect(() => {
    setScore(ScoreModel.calculateScores(props.questions, props.level.answers))
  }, [props.level.answers, props.questions])

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Your Score</Text>
      <Text style={styles.scoreText}>
        {score.toString()} / {config.questionCount}
      </Text>

      <Button
        title={'Back to Home'}
        containerStyle={StyleSheet.flatten(styles.btnContainer)}
        buttonStyle={StyleSheet.flatten(styles.btn)}
        titleStyle={StyleSheet.flatten(styles.btnTitle)}
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 95,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: config.color.secondary,
  },
  title: {
    color: 'white',
    fontSize: RFValue(15),
    fontFamily: 'pusab',
    marginTop: helper.heightPercentageToDP(4),
  },
  scoreText: {
    color: 'orange',
    fontSize: RFValue(55),
    fontFamily: 'montserrat',
    marginTop: helper.heightPercentageToDP(4),
  },
  btnContainer: {
    marginTop: helper.heightPercentageToDP(0.5),
    marginBottom: helper.heightPercentageToDP(4),
    marginLeft: helper.widthPercentageToDP(1),
    marginRight: helper.widthPercentageToDP(1),
  },
  btnContainerHalf: {
    width: helper.widthPercentageToDP(50),
  },
  btnContainerFull: {
    width: helper.widthPercentageToDP(80),
  },
  btn: {
    backgroundColor: '#FF6347',
    borderBottomColor: '#bc1c00',
    borderBottomWidth: 3,
  },
  btnTitle: {
    color: 'white',
    fontSize: RFValue(12),
    fontFamily: 'pusab',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ setBg }, dispatch)

const mapStateToProps = (state) => {
  const { level, questions } = state
  return { level, questions }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreScreen)
