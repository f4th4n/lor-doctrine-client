import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Button } from 'react-native-elements'
import helper from '../helper'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/img/bg.png')} style={styles.bgImage} />
      <View style={styles.content}>
        <Text style={styles.text}>Legends of Runeterra Doctrine</Text>
        <Button
          title={'Start'}
          containerStyle={StyleSheet.flatten(styles.btnContainer)}
          buttonStyle={StyleSheet.flatten(styles.btn)}
          titleStyle={StyleSheet.flatten(styles.btnTitle)}
          onPress={() => navigation.navigate('LevelScreen')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    opacity: 0.4,
    position: 'absolute',
  },
  content: {
    flex: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: RFValue(42),
    color: 'white',
    fontFamily: 'friz',
    textAlign: 'center',
    padding: 70,
    textShadowColor: '#FF6347',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10,
  },
  btnContainer: {
    width: helper.widthPercentageToDP(70),
    marginTop: helper.heightPercentageToDP(0.5),
    marginBottom: helper.heightPercentageToDP(4),
    marginLeft: helper.widthPercentageToDP(1),
    marginRight: helper.widthPercentageToDP(1),
  },
  btn: {
    backgroundColor: '#FF6347',
    borderBottomColor: '#bc1c00',
    borderBottomWidth: 3,
  },
  btnTitle: {
    color: 'white',
    fontSize: RFValue(14),
    fontFamily: 'pusab',
  },
})

export default HomeScreen
