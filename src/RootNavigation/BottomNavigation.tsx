import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../src/Component';
import Search from '../../src/Component/Search';
import Dashboard from '../../src/Component/Dashboard';
import Profile from '../../src/Component/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

const config = { headerShown: false };


export default function BottomNavigation() {

    return (
        <BottomTab.Navigator
            screenOptions={config}
        >
            <BottomTab.Screen options={{
                tabBarIcon: ({ }) => (
                    <Icon
                        name={'home'}
                        color={"black"}
                        size={22} />
                )
            }} name="Home" component={Home} />
            <BottomTab.Screen
                options={{
                    tabBarIcon: ({ }) => (
                        <Icon
                            name={'search-circle'}
                            color={"black"}
                            size={22} />
                    )
                }}
                name="Search" component={Search} />
            <BottomTab.Screen options={{
                tabBarIcon: ({ }) => (
                    <Icon
                        name={'heart'}
                        color={"black"}
                        size={22} />
                )
            }} name="DashBoard" component={Dashboard} />
            <BottomTab.Screen options={{
                tabBarIcon: ({ }) => (
                    <Icon
                        name={'person'}
                        color={"black"}
                        size={22} />
                )
            }} name="User" component={Profile} />
        </BottomTab.Navigator>
    )
}