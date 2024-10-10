import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import tailwind from '@tailwind';
import { getPersistedUser, getToken } from './localStorage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveJWTTokenAction } from '../Redux/actions/action';

export default function NavigateDicision() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        const getUserExists = async () => {
            let getUser = await getPersistedUser();
            let Token = await AsyncStorage.getItem("jwt_token");

            console.log('tokken--', Token);
            if (Token) {
                dispatch(saveJWTTokenAction(Token));
            }
            console.log('getUserID----', getUser);
            if (Token) {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'BottomTabNavigation',
                            },
                        ],
                    }),
                );
            } else {
                console.log("navigate decision login screen")
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'LoginScreen',
                            },
                        ],
                    }),
                );
            }
        };
        getUserExists();
    }, []);
    return <View>{/* <Text>NavigateDicision</Text> */}</View>;
}
