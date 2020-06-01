import React, { useState, useEffect } from 'react'
import { View, Text, Button, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../config.json'
import { RFValue } from 'react-native-responsive-fontsize'

function TutorialCardDetail(props) {
  if (props.tutorial.index === 0) return <View></View>

  const card = props.questions[props.tutorial.index - 1]

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Type: {card.type}</Text>
      <Text style={styles.text}>Region: {card.region}</Text>
      {card.spellSpeed !== '' && <Text style={styles.text}>Spell Speed: {card.spellSpeed}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: RFValue(10),
    textAlign: 'center',
    fontFamily: 'pusab',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

const mapStateToProps = (state) => {
  const { tutorial, questions } = state
  return { tutorial, questions }
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialCardDetail)
