import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Component/Home'
import { Provider } from 'react-redux'
import store from './Redux'
import { setName } from './Redux/actions/action'
import RootNvaigation from './src/RootNavigation/RootNvaigation'
import { UserProvider } from './src/UserContext/UserContext'
import { ThemeProvider } from './src/Component/ThemeContext/ThemeContext'


export default function App() {
  // useEffect(() => {
  //   dispatch(setName('vallu'))
  // })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider>
          <UserProvider>
            <RootNvaigation />
          </UserProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaView>
  )
}