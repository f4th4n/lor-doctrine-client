import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import HomeScreen from './src/screens/HomeScreen'
import LevelScreen from './src/screens/LevelScreen'
import answerReducer from './src/store/AnswerReducer'

const store = createStore(answerReducer)
const Stack = createStackNavigator()

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LevelScreen" headerMode="none">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LevelScreen" component={LevelScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
