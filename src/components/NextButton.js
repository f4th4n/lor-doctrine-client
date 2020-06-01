import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextCard } from '../store/actions/tutorial-action'
import helper from '../helper'
import config from '../../config'

function AnswerButton(props) {
  const title = props.tutorial.index >= config.tutorial.cardCount ? 'Go To Question' : 'Next Card'

  const baseContainer = [styles.btnContainer]
  const additionalContainer =
    props.tutorial.index >= config.tutorial.cardCount ? styles.btnContainerFull : styles.btnContainerHalf
  baseContainer.push(additionalContainer)

  return (
    <Button
      title={title}
      containerStyle={StyleSheet.flatten(baseContainer)}
      buttonStyle={StyleSheet.flatten(styles.btn)}
      titleStyle={StyleSheet.flatten(styles.btnTitle)}
      onPress={() => props.nextCard()}
    />
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: helper.heightPercentageToDP(0.5),
    marginBottom: helper.heightPercentageToDP(4),
    marginLeft: helper.widthPercentageToDP(1),
    marginRight: helper.widthPercentageToDP(1),
  },
  btnContainerHalf: {
    width: helper.widthPercentageToDP(50),
  },
  btnContainerFull: {
    width: helper.widthPercentageToDP(80),
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ nextCard }, dispatch)

const mapStateToProps = (state) => {
  const { tutorial } = state
  return { tutorial }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerButton)
