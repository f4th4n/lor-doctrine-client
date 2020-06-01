import React, { useState } from 'react'
import { View, Text, Button, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import config from '../../config.json'

function Question() {
  return (
    <View style={styles.root}>
      <Text>Question</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 90,
  },
})

const mapStateToProps = (state) => {
  const { tutorial } = state
  return { tutorial }
}

export default connect(mapStateToProps)(Question)
