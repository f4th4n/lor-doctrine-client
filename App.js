import * as React from 'react'
import { View, Text, Button, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import HomeScreen from './src/screens/HomeScreen'
import LevelScreen from './src/screens/LevelScreen'
import ScoreScreen from './src/screens/ScoreScreen'
import reducers from './src/store/reducers/index'
import config from './config.json'
import { useFonts } from '@use-expo/font'
import * as SplashScreen from 'expo-splash-screen'

const store = createStore(reducers)
const Stack = createStackNavigator()

function App() {
  const [isLoaded] = useFonts({
    oswald: require('./assets/fonts/oswald.ttf'),
    pusab: require('./assets/fonts/8-bit-pusab.ttf'),
    friz: require('./assets/fonts/friz-quadrata.ttf'),
    montserrat: require('./assets/fonts/montserrat.otf'),
  })

  if (!isLoaded) return <Text>Loading...</Text>

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={config.color.secondary} />
        <Stack.Navigator initialRouteName="HomeScreen" headerMode="none">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LevelScreen" component={LevelScreen} />
          <Stack.Screen name="ScoreScreen" component={ScoreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
