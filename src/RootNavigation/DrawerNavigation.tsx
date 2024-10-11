import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../src/Component';
import BottomNavigation from './BottomNavigation';
import Search from '../../src/Component/Search';
import Dashboard from '../../src/Component/Dashboard';
import Profile from '../../src/Component/Profile';
const DrawerTap = createDrawerNavigator();

const config = { headerShown: false };
export default function DrawerNavigation() {
    let data = ['Home', 'Search', 'DashBoard', 'User']
    return (
        <DrawerTap.Navigator

            screenOptions={{ headerTitle: "" }}
            initialRouteName='BottomNavigation'
        >
            {/* <DrawerTap.Screen component={Home} name='Home' /> */}
            <DrawerTap.Screen component={BottomNavigation} name='HomeScreen' />
            {/* <DrawerTap.Screen component={Search} name='Search' />
            <DrawerTap.Screen component={Dashboard} name='Dashboard' />
            <DrawerTap.Screen component={Profile} name='Profile' /> */}

        </DrawerTap.Navigator>
    )
}