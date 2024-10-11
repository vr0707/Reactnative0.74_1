import { View, Text, TextInput, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react';
import tailwind from '@tailwind';
import assets_manifest from '@assets';
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonComponent from '../../../sharedComponents/molecules/ButtonComponent';
import { getUsers, initDB, closeDB, createTable } from '../../../workers/Database';
import { getAxiosTest } from '../../../src/remote/userRemote';
import { saveJWTTokenAction } from '../../../Redux/actions/action';
import NavigateDicision from 'workers/NavigationDecision';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
export default function Login() {


    // useFocusEffect(() => {
    //     fetchUsers()
    // })
    useFocusEffect(
        useCallback(() => {
            // Do something when the screen is focused
            console.log('Screen is focused');
            getUsers().then((e: any) => {
                console.log("eeeeee", e);
                setUsers(e)
            })
            // Return a cleanup function to run when the screen is unfocused
            return () => {
                console.log('Screen is unfocused');
            };
        }, [])
    );
    function login() {
        // for (let i = 0; i < users.length; i++) {
        //     // const element = array[i];
        //     if (emailOrMobile == users[i].name) {
        //         console.log(users[i].name);
        //         if (password == users[i].password) {
        //             console.log(users[i].password);

        //         } else {
        //             console.log("Not Valid Password");
        //         }


        //     } else {
        //         console.log("Not Valid User Name");

        //     }

        // }
        // navigation.navigate("BottomTabNavigation")
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
    }
    const width = Dimensions.get('screen').width;
    const height = Dimensions.get('screen').height;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [users, setUsers] = useState([])

    // const fetchUsers = async () => {
    //     await getUsers().then((e: any) => {
    //         console.log("data", e);
    //         setUsers(e)
    //     });



    // };
    // useEffect(() => {
    //     // getData()
    //     getAxiosTest(1).then((res) => {
    //         console.log("hoeres", res.res)
    //     })
    // }, [])
    return (
        <View style={[tailwind('flex-1 ')]}>
            <View style={[tailwind('px-8 flex-1 justify-center')]}>

                <EmailPhoneComp
                    emailOrMobile={emailOrMobile}
                    setEmailOrMobile={setEmailOrMobile}
                    emailFocus={emailFocus}
                    setEmailFocus={setEmailFocus}
                    setPasswordFocus={setPasswordFocus}
                />
                <PasswordComponent
                    password={password}
                    setPassword={setPassword}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    passwordFocus={passwordFocus}
                    setPasswordFocus={setPasswordFocus}
                    setEmailFocus={setEmailFocus}
                    emailOrMobile={emailOrMobile}
                />
                <View style={[tailwind('items-center my-8')]}>
                    <TouchableOpacity
                        onPress={() => {
                            login()
                        }}
                        style={[tailwind('pt-0'), { width: moderateScale(180, 0.3) }]}>
                        <ButtonComponent text="Login" />

                    </TouchableOpacity>

                </View>
                <View style={[tailwind('items-center my-1 flex-row self-center')]}>
                    <Text>Don't have an account ? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")} activeOpacity={0.7}>
                        <Text style={[tailwind(''), { color: "#0097FF" }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
export const EmailPhoneComp = (props: any) => {
    return (
        <View style={[tailwind('mt-10 self-center')]}>
            <Text style={[tailwind('font-medium font-14 mb-3 text-black'), { color: '#2E2E2E', fontSize: 16, fontFamily: 'Outfit-Medium' }]}>
                Email / Phone
            </Text>
            {/* <Text style={[tailwind('font-medium font-14 mb-3 text-black')]}>
          Email or Phone Number
        </Text> */}
            <View
                style={[
                    tailwind('border'),
                    {
                        borderColor: props?.emailFocus ? '#008CEB' : '#E2DBD6',
                        borderRadius: 10,
                        backgroundColor: props?.emailFocus ? '#E8F6FF' : '#F7F7F9',
                        width: moderateScale(340, 0.5)
                    },
                ]}>
                <View style={[tailwind('flex-row items-center')]}>
                    <Image
                        source={assets_manifest.mail}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: 'contain',
                            marginLeft: 14,
                        }}
                    />
                    <TextInput
                        maxLength={props?.maxLength}
                        value={props?.emailOrMobile}
                        placeholder="Enter E-mail or Phone"
                        onFocus={() => {
                            props?.setEmailFocus(true);
                            // props?.setPasswordFocus(false);
                        }}
                        placeholderTextColor={"#15162450"}
                        onChangeText={text => props?.setEmailOrMobile(text)}
                        style={[
                            tailwind(''),
                            {
                                flex: 1,
                                fontSize: 16,
                                marginLeft: 14,
                                color: 'black',
                            },
                        ]}
                    />
                </View>
            </View>
        </View>
    );
};
export const PasswordComponent = (props: any) => {
    const navigation = useNavigation();
    return (
        <View style={[tailwind('mt-6 self-center')]}>
            <View style={[tailwind('flex-row items-center justify-between  mb-3')]}>
                <Text style={[tailwind('font-medium font-14 text-black'), { color: '#000000', fontSize: 16, fontFamily: 'Outfit-Medium' }]}>
                    Password
                </Text>
            </View>
            <View
                style={[
                    tailwind('border flex-row items-center justify-between'),
                    {
                        borderColor: props?.passwordFocus ? '#008CEB' : '#E2DBD6',
                        borderRadius: 10,
                        backgroundColor: props?.passwordFocus ? '#E8F6FF' : '#F7F7F9',
                        width: moderateScale(340, 0.7)
                    },
                ]}>
                <View style={[tailwind('flex-row items-center')]}>
                    <Image
                        source={assets_manifest.key}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: 'contain',
                            marginLeft: 14,
                        }}
                    />
                    <TextInput
                        value={props?.password}
                        onChangeText={text => props?.setPassword(text)}
                        secureTextEntry={props?.hidePassword}
                        placeholder={"Enter" + " " + props?.values}
                        placeholderTextColor={"#15162450"}
                        onFocus={() => {
                            props?.setPasswordFocus(true);
                            props?.setEmailFocus(false);
                        }}
                        style={[
                            tailwind(''),
                            {
                                flex: 1,
                                fontSize: 16,
                                marginLeft: 14,
                                color: 'black',
                                width: '80%',
                            },
                        ]}
                        maxLength={15}
                    />
                    <TouchableOpacity
                        onPress={() => props.setHidePassword(!props?.hidePassword)}>
                        <Icon
                            name={!props?.hidePassword ? 'eye-outline' : 'eye-off-outline'}
                            color={'black'}
                            size={22}
                            style={{
                                marginHorizontal: 14,
                                // marginLeft: 14,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={[tailwind('mt-4')]}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={[tailwind('font-regular font-12'), { color: '#FF0000', textAlign: 'right', fontFamily: 'Outfit-Regular' }]}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};