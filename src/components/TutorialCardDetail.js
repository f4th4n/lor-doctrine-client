import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RFValue } from 'react-native-responsive-fontsize'

function TutorialCardDetail(props) {
  if (props.tutorial.index === 0) return <View></View>

  const card = props.questions[props.tutorial.index - 1].card

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Type: {card.type}</Text>
      <Text style={styles.text}>Region: {card.region}</Text>
      {card.spellSpeed !== '' && <Text style={styles.text}>Spell Speed: {card.spellSpeed}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: RFValue(10),
    textAlign: 'center',
    fontFamily: 'pusab',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

const mapStateToProps = (state) => {
  const { tutorial, questions } = state
  return { tutorial, questions }
}

export default connect(mapStateToProps, mapDispatchToProps)(TutorialCardDetail)
