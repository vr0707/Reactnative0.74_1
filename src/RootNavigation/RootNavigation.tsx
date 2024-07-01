import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Component';
import { useDispatch } from 'react-redux';
import { setName } from '../../Redux/actions/action';
import SQLite from 'react-native-sqlite-storage';
import Second from '../Component/Second';
import Login from '../Component/LoginScreen';
import SignUp from '../../sharedComponents/molecules/SignUp';
import SignUpScreen from '../../src/Component/SignUpScreen';
import { closeDB, createTable, initDB } from '../../workers/Database';
export default function RootNavigation() {

    const disPatch = useDispatch()

    const valueSet = async () => {
        disPatch(setName('vallu'))
    }

    const RootNavigator = createNativeStackNavigator();
    const StackConfig = { headerShown: false };
    const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             navigation.navigate('Home');
            //         }
            //     })
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            // navigation.navigate('Home');
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <NavigationContainer>
            <RootNavigator.Navigator
                initialRouteName={"Login"}
                screenOptions={StackConfig}
            >
                <RootNavigator.Screen
                    component={Home}
                    name="Home"
                />
                <RootNavigator.Screen
                    component={Second}
                    name="Second"
                />
                <RootNavigator.Screen
                    component={Login}
                    name="Login"
                />
                <RootNavigator.Screen
                    component={SignUpScreen}
                    name="SignUp"
                />

            </RootNavigator.Navigator>
        </NavigationContainer>
    )
}