import React from 'react'
import { View, Text, Button, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config.json'
import NextButton from '../components/NextButton'
import TutorialProgress from '../components/TutorialProgress'
import TutorialCard from '../components/TutorialCard'
import Header from '../components/Header'

function LevelScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Header />

      <View style={styles.content}>
        <View style={styles.card}>
          <TutorialCard />
          <TutorialProgress />
        </View>

        <View style={styles.next}>
          <NextButton />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: config.color.secondary,
  },
  content: {
    flex: 90,
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

export default LevelScreen
