import React from 'react'
import { View, StyleSheet } from 'react-native'
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
