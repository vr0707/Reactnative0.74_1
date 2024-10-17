import { View, Text } from 'react-native'
import React from 'react'
import tailwind from '@tailwind'
export default function Dashboard() {
    return (
        <View style={[tailwind('flex-1 items-center justify-center')]}>
            <Text style={[tailwind(''), { fontSize: 20, color: 'black' }]}>Coming Soon!</Text>
        </View>
    )
}