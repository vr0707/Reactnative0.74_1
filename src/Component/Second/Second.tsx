import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../../src/UserContext/UserContext';

export default function Second() {
    const { user, setUser } = useContext(UserContext);
    return (
        <View>
            <Text>{user.name}</Text>
        </View>
    )
}