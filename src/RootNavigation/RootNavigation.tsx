import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Login from '../../src/Component/LoginScreen';
import NavigateDicision from '../../workers/NavigationDecision';
import Splashscreen from '../../src/Component/SplashScreen';
import SignUpScreen from '../../src/Component/SignUpScreen';
import DrawerNavigation from './DrawerNavigation';



const RootNavigator = createNativeStackNavigator();

const StackConfig = { headerShown: false };
export default function RootNavigation() {
    return (
        <NavigationContainer>
            <RootNavigator.Navigator
                initialRouteName={"NavigationDecision"}
                screenOptions={StackConfig}>
                {/* <RootNavigator.Screen component={InitialScreen} name="InitialScreen" /> */}

                <RootNavigator.Screen component={NavigateDicision} name="NavigationDecision" />
                <RootNavigator.Screen component={BottomNavigation} name="BottomTabNavigation" />
                <RootNavigator.Screen component={DrawerNavigation} name="DrawerNavigation" />
                <RootNavigator.Screen component={Login} name="LoginScreen" />
                <RootNavigator.Screen component={SignUpScreen} name="SignUpScreen" />

            </RootNavigator.Navigator>
        </NavigationContainer>
    )
}