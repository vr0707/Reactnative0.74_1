import { View, Text, Button, TextInput, Image } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import store from '../../Redux'
import { useDispatch } from 'react-redux';
import { setName } from '../../Redux/actions/action';
import tailwind from '@tailwind';
import { getAxiosTest } from '../../src/remote/userRemote';
import requestServers from '../../workers/requestServers';
import { closeDB, createTable, initDB } from '../../workers/Database';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../src/UserContext/UserContext';
import assets_manifest from '@assets';
import TopBar from '../../sharedComponents/atoms/TopBar';
import Icon from 'react-native-vector-icons/Ionicons';
import { errorBox, infoBox } from '../../workers/utils';
import { useQuery } from 'react-query';
export default function Home() {

    // useEffect(() => {
    //     // getData()
    //     getAxiosTest(1).then((res) => {
    //         console.log("res", res)
    //     })
    // }, [])
    const categoory = useQuery(['getAxiosTest', 1], getAxiosTest);
    console.log('catrgory', categoory?.data?.res)
    return (
        <View style={tailwind('bg-white h-full p-3')}>
            <TopBar title="Hello" />
            {/* {categoryData.data?.status ? (
          <View>
            <Text style={[tailwind('text-red')]}>Run categoory</Text>
            <AddressIcon />
          </View>
        ) : null} */}
            <Button
                title="Show toast"
                onPress={() => infoBox('This is test')}
            />
            <Icon name="arrow-down" color={"red"} size={25} />
            {/* <Image
          source={assets.react_logo}
          resizeMode="contain"
          style={[tailwind('w-full h-60')]}
        /> */}
        </View>
    )
}