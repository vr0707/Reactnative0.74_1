import { View, Text, Image } from 'react-native'
import React from 'react'
import tailwind from '@tailwind'
import { moderateScale, scale } from 'react-native-size-matters'
interface Prototypes {
    icon: String,
    title: String,
    user: String,
    user_id: String
}
export default function Card(props: Prototypes) {
    return (
        <View style={[tailwind('mb-3'), {
            borderWidth: 0.6,
            padding: 18,
            borderRadius: 10,
            borderColor: 'grey'
        }]}>
            <View style={[tailwind('flex-row items-center'), {}]}>
                <Image
                    source={props?.icon}
                    style={[tailwind(''), {
                        width: 60,
                        height: 60,
                        resizeMode: "contain"
                    }]}
                />
                <View style={[tailwind('mx-3 justify-between'), {
                    width: moderateScale(200)
                }]}>
                    <Text style={[tailwind('font-regular font-bold')]}>{props?.title}</Text>
                    <Text>{props?.user}</Text>
                    <Text>{props?.user_id}</Text>
                </View>
            </View>
        </View>
    )
}