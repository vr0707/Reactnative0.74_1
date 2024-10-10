import { View, Text, SafeAreaView, StatusBar, Appearance, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import Home from './src/Component/Home'
import { Provider } from 'react-redux'
import store from './Redux'
import { setName } from './Redux/actions/action'
import { UserProvider } from './src/UserContext/UserContext'
import { useTheme } from './src/ThemeContext/ThemeContext'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { toastConfig } from './constants/toastConfig';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import StackNavigation from './src/RootNavigation/StackNavigation'
import RootNavigation from './src/RootNavigation/RootNavigation'

const queryClient = new QueryClient();


export default function App() {
  // useEffect(() => {
  //   dispatch(setName('vallu'))
  // })
  // const { theme, toggleTheme } = useTheme();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar backgroundColor={'#3896FF'} barStyle={'light-content'} />
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <RootNavigation />
          </QueryClientProvider>
        </UserProvider>
      </Provider>
      <Toast config={toastConfig} />
    </SafeAreaView>
  )
}