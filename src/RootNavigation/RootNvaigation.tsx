import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Component';
import { useDispatch } from 'react-redux';
import { setName } from '../../Redux/actions/action';
import SQLite from 'react-native-sqlite-storage';
import Second from '../../src/Component/Second';
const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { "eeeeee", console.log(error) }
);
export default function RootNvaigation() {
    const disPatch = useDispatch()
    useEffect(() => {
        // getData();
        createTable()
        getData()
        valueSet()
    }, [])
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
    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    }
    return (
        <NavigationContainer>
            <RootNavigator.Navigator
                initialRouteName={"Home"}
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

            </RootNavigator.Navigator>
        </NavigationContainer>
    )
}