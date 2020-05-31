import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import config from '../../config.json'
import FlipCard from 'react-native-flip-card'
import data from '../../assets/data/set1-en_us.json'

function LevelScreen({ navigation }) {
  const [flip, setFlip] = useState(false)
  const [isLoaded] = useFonts({ oswald: require('../../assets/fonts/Oswald-Regular.ttf') })

  if (!isLoaded) return <AppLoading />

  setTimeout(() => {
    setFlip(true)
  }, 1000)
  console.log('data', data)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: config.color.secondary,
      }}
    >
      <Text style={{ fontFamily: 'oswald' }}>Level Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />

      <FlipCard flipHorizontal={true} flip={flip}>
        {/* Face Side */}
        <View>
          <Text style={{ color: 'white' }}>The Face</Text>
        </View>
        {/* Back Side */}
        <View>
          <Text style={{ color: 'white' }}>The Back</Text>
        </View>
      </FlipCard>
    </View>
  )
}

export default LevelScreen
