import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tailwind from '@tailwind'
import { SearchBar } from 'react-native-screens'
import SearchComponent from '../../../sharedComponents/molecules/SearchComponent'
import { moderateScale, scale } from 'react-native-size-matters'
import assets_manifest from '@assets'
import Card from '../../../sharedComponents/molecules/Card'
import { useQuery } from 'react-query'
import { getAxiosTest } from '../../../src/remote/userRemote'
import { index } from 'realm'
import { serializer } from 'metro.config'

export default function Search() {
    const [search, setsearch] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        getAxiosTest({ params: 1 }).then((res) => {
            console.log('useEffect', res)
            setData(res?.res)
        })
    }, [])
    // const category = useQuery(['getAxiosTest', 1], getAxiosTest);
    // console.log('search', category?.data?.res)
    const searchData = () => {

    }
    useEffect(() => {
        if (search != undefined) {
            // console.log('fil', filterItems(data, search));
            const result = filterItems(data, search);
            console.log("fillresult", result);
            setData(result)
        } else {
            setData(data)
        }
    }, [search])
    function isCherries(val) {
        const result = data.filter((element) => {
            console.log("eme", element.user == val)
            return element.user == val;
        })
        console.log("result", result)
        setData(result)
    }
    function filterItems(arr, query) {
        return arr.filter((el) => el.user.toLowerCase().includes(query.toLowerCase()));
    }
    return (
        <View style={[tailwind('bg-light flex-1 py-8 px-2'), { paddingHorizontal: scale(1) }]}>
            <SearchComponent
                width={'95%'}
                textColor={'black'}
                blaceholder={'black'}
                tintColor={'black'}
                border={'black'}
                backgroundColor={'white'}
                onPressIn={(e) => { console.log(e.nativeEvent) }}
                search_name={'Products'}
                textWidth={"70%"}
                search={search}
                // setsearch={setsearch}
                onChange={(e) => {
                    setsearch(e.nativeEvent.text);
                    // if (e.nativeEvent?.text != '') {

                    //     isCherries(e.nativeEvent?.text)
                    // }
                }}
            />
            <View style={[tailwind('px-2 pt-5'), {}]}>
                {/* {category?.data?.res.map((item, index) => (
                    <Card
                        icon={assets_manifest.Group_153}
                        title={item?.source}
                        user={item?.type}
                        user_id={item?.user}
                    />
                ))} */}
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Card
                            icon={assets_manifest.Group_153}
                            title={item?.source}
                            user={item?.type}
                            user_id={item?.user}
                        />
                    )}
                />
            </View>
        </View >
    )
}