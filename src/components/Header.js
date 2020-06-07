import React from 'react'
import config from '../../config.json'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import helper from '../helper'

function Header(props) {
  const onPress = () => {
    props.navigation.navigate('HomeScreen')
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>✨ Legends of Runeterra Doctrine ✨</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 5,
    justifyContent: 'center',
    paddingTop: helper.heightPercentageToDP(0.5),
    paddingBottom: helper.heightPercentageToDP(0.5),
    marginBottom: helper.heightPercentageToDP(1.5),
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '100%',
    backgroundColor: config.color.secondary,
  },
  text: {
    fontSize: RFValue(16),
    color: 'white',
    fontFamily: 'friz',
    textAlign: 'center',
  },
})

export default Header
