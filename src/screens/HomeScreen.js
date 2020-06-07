import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Button } from 'react-native-elements'
import helper from '../helper'
import { resetLevel } from '../store/actions/level-action'
import { resetQuestions } from '../store/actions/question-action'
import { resetTutorial } from '../store/actions/tutorial-action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function HomeScreen(props) {
  const onPress = () => {
    props.resetLevel()
    props.resetQuestions()
    props.resetTutorial()
    props.navigation.navigate('LevelScreen')
  }

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
          onPress={onPress}
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ resetLevel, resetQuestions, resetTutorial }, dispatch)

export default connect(null, mapDispatchToProps)(HomeScreen)
