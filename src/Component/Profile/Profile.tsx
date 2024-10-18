import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from '@tailwind'
import assets_manifest from '@assets'
import ProfileComponent from './Blocks/ProfileComponent'
import { infoBox } from '../../../workers/utils'
export default function Profile() {
    return (
        <View style={[tailwind('flex-1'), { padding: 15 }]}>
            <Image
                source={assets_manifest.user}
                style={[tailwind(''), {
                    width: 110,
                    height: 110,
                    alignSelf: "center",
                    borderRadius: 60
                }]}
            />
            <ProfileComponent
                Image={assets_manifest.person}
                name={'Name'}
                width={'100%'}
                textColor={'black'}
                blaceholder={'black'}
                tintColor={'black'}
                border={'black'}
                backgroundColor={'white'}
                onPressIn={(e) => { console.log(e.nativeEvent) }}
                search_name={'Products'}
                textWidth={"70%"}
                search={'Vallappan'}
                editable={false}
                // setsearch={setsearch}
                onChange={(e) => {
                    if (e.nativeEvent?.text != '') {

                    }
                }}
            />
            <ProfileComponent
                Image={assets_manifest.mail}
                name={'E-Mail'}
                width={'100%'}
                textColor={'black'}
                blaceholder={'black'}
                tintColor={'black'}
                border={'black'}
                backgroundColor={'white'}
                onPressIn={(e) => { console.log(e.nativeEvent) }}
                search_name={'Products'}
                textWidth={"70%"}
                search={'vallappanr@svaantech.com'}
                editable={false}
                // setsearch={setsearch}
                onChange={(e) => {
                    if (e.nativeEvent?.text != '') {

                    }
                }}
            />
            <ProfileComponent
                Image={assets_manifest.user}
                name={'Gender'}
                width={'100%'}
                textColor={'black'}
                blaceholder={'black'}
                tintColor={'black'}
                border={'black'}
                backgroundColor={'white'}
                onPressIn={(e) => { console.log(e.nativeEvent) }}
                search_name={'Products'}
                textWidth={"70%"}
                search={'Male'}
                editable={false}
                // setsearch={setsearch}
                onChange={(e) => {
                    if (e.nativeEvent?.text != '') {

                    }
                }}
            />
            <ProfileComponent
                Image={assets_manifest.location}
                name={'Location'}
                width={'100%'}
                textColor={'black'}
                blaceholder={'black'}
                tintColor={'black'}
                border={'black'}
                backgroundColor={'white'}
                onPressIn={(e) => { console.log(e.nativeEvent) }}
                search_name={'Products'}
                textWidth={"70%"}
                search={'Madurai'}
                editable={false}
                // setsearch={setsearch}
                onChange={(e) => {
                    if (e.nativeEvent?.text != '') {

                    }
                }}
            />
            <ProfileComponent
                Image={assets_manifest.state}
                name={'State'}
                width={'100%'}
                textColor={'black'}
                blaceholder={'black'}
                tintColor={'black'}
                border={'black'}
                backgroundColor={'white'}
                onPressIn={(e) => { console.log(e.nativeEvent) }}
                search_name={'Products'}
                textWidth={"70%"}
                search={'Tamilnadu'}
                editable={false}
                // setsearch={setsearch}
                onChange={(e) => {
                    if (e.nativeEvent?.text != '') {

                    }
                }}
            />
            <TouchableOpacity
                onPress={() => infoBox('Save Success')}
                style={[tailwind('m-5 items-center justify-center'), {
                    width: '50%', height: 50,
                    backgroundColor: "#0394fc",
                    borderRadius: 40, alignSelf: 'center'
                }]}>
                <Text style={[tailwind('font-bold'), { fontSize: 16, color: "black" }]}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}