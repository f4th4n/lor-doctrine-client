import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ScoreModel from '../models/score-model'
import { setBg } from '../store/actions/level-action'
import { bindActionCreators } from 'redux'

function ScoreScreen(props) {
  useEffect(() => {
    const score = ScoreModel.calculateScores(props.questions, props.level.answers)
  }, [props.level.answers, props.questions])

  return (
    <View style={styles.root}>
      <Text>Score screen</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScoreScreen)
