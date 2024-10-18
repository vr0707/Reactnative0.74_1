import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native'
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
import Video, { VideoRef } from 'react-native-video';
import Modal from "react-native-modal";
import { verticalScale } from 'react-native-size-matters';
import { assertCast } from 'node_modules/@reduxjs/toolkit/dist/query/tsHelpers';
import { assertEasingIsWorklet } from 'react-native-reanimated/lib/typescript/animation/util';
import VideoCrad from './Profile/Blocks/VideoCrad';
export default function Home() {

  // useEffect(() => {
  //     // getData()
  //     getAxiosTest(1).then((res) => {
  //         console.log("res", res)
  //     })
  // }, [])

  const categoory = useQuery(['getAxiosTest', 1], getAxiosTest);
  console.log('catrgory', categoory?.data?.res)
  const videoRef = useRef<VideoRef>(null);
  const [open, setOpen] = useState(false);
  const _videoRef = useRef();
  const [uri, setUri] = useState('');
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height
  return (
    <ScrollView style={tailwind('bg-white flex-1 p-3')}>
      {/* <TopBar title="Hello" /> */}
      {/* {categoryData.data?.status ? (
          <View>
            <Text style={[tailwind('text-red')]}>Run categoory</Text>
            <AddressIcon />
          </View>
        ) : null} */}
      {/* <Button
        title="Show toast"
        onPress={() => infoBox('This is test')}
      />
      <Icon name="arrow-down" color={"red"} size={25} /> */}
      {/* <Image
          source={assets.react_logo}
          resizeMode="contain"
          style={[tailwind('w-full h-60')]}
        /> */}
      <TopBar title="Videos" />
      {/* <ScrollView
          style={[tailwind(''), {}]}>
          {data.map((item, index) => <VideoCrad
            uri={item?.thumbnailUrl}
          />)}
        </ScrollView> */}
      <View style={[tailwind(''), {}]}>
        <FlatList
          style={[tailwind(''), {}]}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <VideoCrad
              uri={item?.thumbnailUrl}
              title={item?.title}
              onPress={() => {
                setUri(item?.videoUrl),
                  setOpen(!open)
              }}
            />

          )}
        />
        <TopBar title="New Videos" />
        <FlatList
          style={[tailwind(''), {}]}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <VideoCrad
              uri={item?.thumbnailUrl}
              title={item?.title}
              onPress={() => {
                setUri(item?.videoUrl),
                  setOpen(!open)
              }}
            />

          )}
        />
        <TopBar title="Recent Uploaded" />
        <FlatList
          style={[tailwind(''), {}]}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <VideoCrad
              uri={item?.thumbnailUrl}
              title={item?.title}
              onPress={() => {
                setUri(item?.videoUrl),
                  setOpen(!open)
              }}
            />

          )}
        />
        <TopBar title="Recently Watched" />
        <FlatList
          contentContainerStyle={{ paddingBottom: 40 }}
          style={[tailwind(''), {}]}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <VideoCrad
              uri={item?.thumbnailUrl}
              title={item?.title}
              onPress={() => {
                setUri(item?.videoUrl),
                  setOpen(!open)
              }}
            />

          )}
        />
      </View>
      <Modal isVisible={open} >
        <View style={[tailwind('flex-1 justify-center')]}>
          <TouchableOpacity onPress={() => {
            setOpen(!open),
              videoRef?.current?.pause
          }}>
            <Image
              source={assets_manifest.close}
              style={[tailwind(''), {
                width: 50,
                height: 50,
                resizeMode: "contain", alignSelf: "flex-end"
              }]}
            />


          </TouchableOpacity>
          <Video
            controlsStyles={{
              liveLabel: 'Live',

            }}
            controls
            onTouchEnd={(e) => {
              console.log(e)
            }}
            fullscreenAutorotate={true}
            paused={true}
            // Can be a URL or a local file.
            source={{ uri: uri }}
            // Store reference  
            ref={videoRef}
            playInBackground={false}
            // Callback when remote video is buffering                                      
            onBuffer={(e) => {
              console.log("buffer", e);

            }}

            // Callback when video cannot be loaded              
            onError={(e) => {
              console.log("errr", e);

            }}
            style={[tailwind(''), {
              width: '100%',
              height: '40%',
              alignSelf: "center"
            }]}
          />

        </View>
      </Modal>


    </ScrollView>
  )
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export const data = [
  {
    "id": "1",
    "title": "Big Buck Bunny",
    "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
    "duration": "8:18",
    "uploadTime": "May 9, 2011",
    "views": "24,969,123",
    "author": "Vlc Media Player",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    "subscriber": "25254545 Subscribers",
    "isLive": true
  },
  {
    "id": "2",
    "title": "The first Blender Open Movie from 2006",
    "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
    "duration": "12:18",
    "uploadTime": "May 9, 2011",
    "views": "24,969,123",
    "author": "Blender Inc.",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
    "subscriber": "25254545 Subscribers",
    "isLive": true
  },
  {
    "id": "3",
    "title": "For Bigger Blazes",
    "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
    "duration": "8:18",
    "uploadTime": "May 9, 2011",
    "views": "24,969,123",
    "author": "T-Series Regional",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
    "subscriber": "25254545 Subscribers",
    "isLive": true
  },
  {
    "id": "4",
    "title": "For Bigger Escape",
    "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
    "duration": "8:18",
    "uploadTime": "May 9, 2011",
    "views": "24,969,123",
    "author": "T-Series Regional",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    "subscriber": "25254545 Subscribers",
    "isLive": false
  },
  {
    "id": "5",
    "title": "Big Buck Bunny",
    "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
    "duration": "8:18",
    "uploadTime": "May 9, 2011",
    "views": "24,969,123",
    "author": "Vlc Media Player",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    "subscriber": "25254545 Subscribers",
    "isLive": true
  },
  {
    "id": "6",
    "title": "For Bigger Blazes",
    "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
    "duration": "8:18",
    "uploadTime": "May 9, 2011",
    "views": "24,969,123",
    "author": "T-Series Regional",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
    "subscriber": "25254545 Subscribers",
    "isLive": false
  },
  {
    "id": "7",
    "title": "For Bigger Escape",
    "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
    "duration": "8:18",
    "uploadTime": "May 9, 2011",
    "views": "24,969,123",
    "author": "T-Series Regional",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    "subscriber": "25254545 Subscribers",
    "isLive": true
  },
  {
    "id": "8",
    "title": "The first Blender Open Movie from 2006",
    "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
    "duration": "12:18",
    "uploadTime": "May 9, 2011",
    "views": "24,969,123",
    "author": "Blender Inc.",
    "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
    "subscriber": "25254545 Subscribers",
    "isLive": false
  }
]