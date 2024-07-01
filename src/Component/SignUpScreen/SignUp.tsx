import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EmailPhoneComp } from '../LoginScreen/Login'
import ButtonComponent from '../../../sharedComponents/molecules/ButtonComponent'
import assets_manifest from '@assets';
import tailwind from '@tailwind';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { closeDB, createTable, initDB, insertUser } from '../../../workers/Database';


export default function SignUpScreen() {
    useEffect(() => {
        setupDB();
    }, []);
    const setupDB = async () => {
        await initDB();
        await createTable();
    };
    const addUser = async () => {
        await insertUser(emailOrMobile, 0, password);
    };
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [confirmHidePassword, setConfirmHidePassword] = useState(true);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
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
                <PasswordComponent
                    password={confirmPassword}
                    setPassword={setConfirmPassword}
                    hidePassword={confirmHidePassword}
                    setHidePassword={setConfirmHidePassword}
                    passwordFocus={passwordFocus}
                    setPasswordFocus={setPasswordFocus}
                    setEmailFocus={setEmailFocus}
                    emailOrMobile={emailOrMobile}
                />
                <View style={[tailwind('items-center my-8')]}>
                    <TouchableOpacity
                        onPress={() => {
                            console.log("login")
                            addUser()
                        }}
                        style={[tailwind('pt-0'), { width: '100%' }]}>
                        <ButtonComponent text="SignUp" />

                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}
const PasswordComponent = (props: any) => {
    const navigation = useNavigation();
    return (
        <View style={[tailwind('mt-6')]}>
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
                        placeholder="Enter Password"
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