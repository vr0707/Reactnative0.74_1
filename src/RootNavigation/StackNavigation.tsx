import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Component';
import { useDispatch } from 'react-redux';
import { setName } from '../../Redux/actions/action';
import Second from '../Component/Second';
import Login from '../Component/LoginScreen';
import SignUp from '../../sharedComponents/molecules/SignUp';
import SignUpScreen from '../Component/SignUpScreen';
import Search from '../Component/Search';
import Dashboard from '../Component/Dashboard';
import Profile from '../Component/Profile';

export default function StackNavigation() {

    const disPatch = useDispatch()


    const RootNavigator = createNativeStackNavigator();
    const StackConfig = { headerShown: false };

    return (
        <NavigationContainer>
            <RootNavigator.Navigator
                initialRouteName={"LoginScreen"}
                screenOptions={StackConfig}
            >
                <RootNavigator.Screen
                    component={Home}
                    name="HomeScreen"
                />
                <RootNavigator.Screen
                    component={Second}
                    name="SecondScreen"
                />
                <RootNavigator.Screen
                    component={Login}
                    name="LoginScreen"
                />
                <RootNavigator.Screen
                    component={SignUpScreen}
                    name="SignUpScreen"
                />
                <RootNavigator.Screen
                    component={Search}
                    name="SearchScreen"
                />
                <RootNavigator.Screen
                    component={Dashboard}
                    name="DashboardScreen"
                />
                <RootNavigator.Screen
                    component={Profile}
                    name="ProfileScreen"
                />
            </RootNavigator.Navigator>
        </NavigationContainer>
    )
}