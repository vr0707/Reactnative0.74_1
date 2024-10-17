import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import tailwind from '@tailwind'
import assets_manifest from '@assets'
export default function ProfileComponent(props: any) {
    return (
        <View style={[tailwind(''), {}]}>
            <Text style={[tailwind(''), { marginVertical: 14 }]}>{props?.name}</Text>
            <View
                style={[
                    tailwind('Input-style'),
                    {
                        width: props?.width,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderColor: props?.border,
                        borderWidth: 0.8,
                        height: 50,
                        paddingHorizontal: 15,
                        borderRadius: 8, paddingVertical: 12, alignSelf: 'center',
                        backgroundColor: props?.backgroundColor, paddingBottom: 12
                    },
                ]}>
                <Image
                    style={{ height: 18, width: 18, resizeMode: 'contain' }}
                    source={props?.Image}
                    tintColor={props?.tintColor ? props?.tintColor : null}
                />
                <TextInput
                    placeholder={props?.search_name}
                    placeholderTextColor={props?.blaceholder ? props?.blaceholder : 'black'}
                    value={props?.search}
                    editable={props?.editable}
                    onBlur={() => {

                    }}
                    onPressIn={props?.onPressIn}
                    onFocus={props?.onFocus}
                    onChange={
                        // props.onChange(e.nativeEvent.text)
                        // searchData(e.nativeEvent.text)
                        // console.log(e.nativeEvent.text);
                        // props?.setsearch(e.nativeEvent.text)
                        props?.onChange
                    }
                    style={[
                        tailwind('font-regular  font-13'),
                        {
                            height: 40,
                            width: props?.textWidth, marginStart: 12,
                            color: props?.textColor ? props?.textColor : 'black',
                            paddingLeft: 10,
                            padding: 0
                        },
                    ]}
                />
            </View>
        </View>
    )
}