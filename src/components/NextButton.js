import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import { addAnswer } from '../AnswerActions'
import helper from '../helper'

function AnswerButton() {
  return (
    <Button
      title="Next Card"
      containerStyle={StyleSheet.flatten(styles.btnContainer)}
      buttonStyle={StyleSheet.flatten(styles.btn)}
      titleStyle={StyleSheet.flatten(styles.btnTitle)}
    />
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    width: helper.widthPercentageToDP(50),
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerButton)
