import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import helper from '../helper'
import config from '../../config.json'

function TutorialProgress(props) {
  var rects = []
  for (let counter = 0; counter < config.tutorial.cardCount; counter++) {
    var styleRect = [styles.rectangle]
    if (counter < props.tutorial.index) {
      styleRect.push(styles.filled)
    }

    const rect = <View key={counter} style={styleRect} />
    rects.push(rect)
  }

  return <View style={styles.root}>{rects.map((rect) => rect)}</View>
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rectangle: {
    width: helper.width * 0.07,
    height: helper.height * 0.01,
    marginRight: helper.width * 0.02,
    backgroundColor: config.color.primary,
    borderRadius: 10,
  },
  filled: {
    backgroundColor: '#110a12',
    borderColor: config.color.primary,
    borderStyle: 'solid',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

const mapStateToProps = (state) => {
  const { tutorial } = state
  return { tutorial }
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialProgress)
