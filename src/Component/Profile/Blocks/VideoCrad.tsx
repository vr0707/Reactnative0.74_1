import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import assets_manifest from '@assets'
import tailwind from '@tailwind'
export default function VideoCrad(props: any) {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height
    return (
        <TouchableOpacity
            onPress={props?.onPress}
            style={[tailwind(''), {
                borderRadius: 20,
                width: width / 2.4, marginRight: 12
            }]} >
            <View
                style={[tailwind('bg-black items-center justify-center'), {
                    width: width / 2.4,
                    height: height / 6,
                    borderRadius: 14, marginRight: 12,
                }]}>
                <Image
                    source={{ uri: props?.uri }}
                    style={[tailwind(''), {
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain"
                    }]}
                />

                <Image
                    source={assets_manifest.play}
                    style={{
                        width: 50,
                        height: 50,
                        tintColor: "black", position: "absolute"
                    }}
                />
            </View>
            <Text style={[tailwind('font-medium text-black'), {

            }]}>{props?.title}</Text>
        </TouchableOpacity>
    )
}