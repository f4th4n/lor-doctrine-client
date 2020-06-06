import React, { useState, useEffect } from 'react'
import { View, Text, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import FlipCard from 'react-native-flip-card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import config from '../../config.json'
import ImageModel from '../models/image-model'

function Card(props) {
  if (props.index === 0) return <Text style={styles.initText}>Remember the following card!!</Text>

  const uri = ImageModel.normal(props.questions[props.index - 1], 'card')
  return (
    <Image
      source={{ uri }}
      style={{
        height: Dimensions.get('window').height * 0.6,
        width: Dimensions.get('window').width * 0.6,
        aspectRatio: 1,
      }}
      resizeMode={'contain'}
    />
  )
}

function TutorialCard(props) {
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (props.tutorial.index === 0 || props.tutorial.index > config.tutorial.cardCount) return

    setFlip(!flip)
  }, [props.tutorial.index])

  return (
    <FlipCard flipVertical={true} flip={flip} clickable={false} style={styles.root}>
      {/* face side */}
      <View style={styles.root}>
        <Card index={props.tutorial.index} questions={props.questions} />
      </View>
      {/* back side */}
      <View style={styles.root}>
        <Card index={props.tutorial.index} questions={props.questions} />
      </View>
    </FlipCard>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initText: {
    backgroundColor: '#423645',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'pusab',
    padding: 50,
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

const mapStateToProps = (state) => {
  const { tutorial, questions } = state
  return { tutorial, questions }
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialCard)
