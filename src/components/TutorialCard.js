import React, { useState, useEffect } from 'react'
import { View, Text, Button, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function TutorialCard() {
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      console.log('flip', flip)
      //setFlip(!flip)
    }, 2000)
  }, [flip])

  return (
    <FlipCard flipVertical={true} flip={flip} clickable={false} style={styles.root}>
      {/* face side */}
      <View style={styles.root}>
        <Text style={styles.initText}>Remember the following card, then click Next Card button below</Text>
      </View>
      {/* back side */}
      <View style={styles.root}>
        <Image
          source={{
            //uri: 'https://dd.b.pvp.net/1_2_0/set1/en_us/img/cards/01IO012T2.png',
            uri: 'http://192.168.1.9:8001/out.png',
          }}
          style={{
            width: Dimensions.get('window').width * 0.7,
            height: Dimensions.get('window').height * 0.7,
            aspectRatio: 1,
          }}
          resizeMode={'contain'}
        />
      </View>
    </FlipCard>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'pusab',
    padding: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(TutorialCard)
