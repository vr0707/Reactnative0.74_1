import { View, Text, SafeAreaView, StatusBar, Appearance } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import Home from './src/Component/Home'
import { Provider } from 'react-redux'
import store from './Redux'
import { setName } from './Redux/actions/action'
import { UserProvider } from './src/UserContext/UserContext'
import { useTheme } from './src/ThemeContext/ThemeContext'
import RootNavigation from './src/RootNavigation/RootNavigation'


export default function App() {
  // useEffect(() => {
  //   dispatch(setName('vallu'))
  // })
  // const { theme, toggleTheme } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar backgroundColor={'#3896FF'} barStyle={'light-content'} />
        <UserProvider>
          <RootNavigation />
        </UserProvider>
      </Provider>
    </SafeAreaView>
  )
}