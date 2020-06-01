import React from 'react'
import config from '../../config.json'
import { View, Text, PixelRatio, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import helper from '../helper'

function Header(props) {
  const onPress = () => {
    props.navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>Legends of Runeterra Doctrine</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 10,
    marginTop: helper.heightPercentageToDP(2),
  },
  text: {
    fontSize: RFValue(16),
    color: 'white',
    fontFamily: 'friz',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})

export default Header
