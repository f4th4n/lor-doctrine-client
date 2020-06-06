import React, { useState, useEffect } from 'react'
import { View, Text, Button, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../config.json'
import TutorialProgress from '../components/TutorialProgress'
import TutorialCard from '../components/TutorialCard'
import TutorialCardDetail from '../components/TutorialCardDetail'
import NextButton from '../components/NextButton'

function Tutorial(props) {
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <TutorialCard />
        <TutorialCardDetail />
      </View>

      <View style={styles.next}>
        <NextButton />
        <TutorialProgress />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 95,
  },
  card: {
    flex: 80,
    alignItems: 'center',
  },
  next: {
    flex: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})

export default Tutorial
