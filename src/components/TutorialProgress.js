import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import helper from '../helper'

function TutorialProgress() {
  return (
    <View style={styles.root}>
      <View style={styles.rectangle} />
      <View style={styles.rectangle} />
      <View style={styles.rectangle} />
      <View style={styles.rectangle} />
      <View style={styles.rectangle} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  rectangle: {
    width: helper.width * 0.07,
    height: helper.height * 0.01,
    marginRight: helper.width * 0.02,
    backgroundColor: 'white',
  },
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      //addAnswer,
    },
    dispatch
  )

const mapStateToProps = (state) => {
  const { answers } = state
  return { answers }
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialProgress)
