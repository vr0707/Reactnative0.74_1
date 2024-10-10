import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../../src/UserContext/UserContext';
import Realm from 'realm';
import assets_manifest from '@assets';
import tailwind from '@tailwind';
import { Modalize } from 'react-native-modalize';
import Modal from "react-native-modal";
import { EmailPhoneComp, PasswordComponent } from '../LoginScreen/Login';
import store from '../../../Redux';
const UserSchema = {
    name: 'User',
    properties: {
        _id: 'int',
        name: 'string',
        age: 'int',
        email: 'string',
        address: 'string',
    },
    primaryKey: '_id',
};

const realmConfig = {
    schema: [UserSchema],
    schemaVersion: 1,
};
export default function Second() {
    // const realm = new Realm();

    const [users, setUsers] = useState([]);
    const [realm, setRealm] = useState(null);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [open, setOpen] = useState(false)
    const modalizeRef = useRef();
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [id, setID] = useState(0)
    const [select, setSelect] = useState(false)
    useEffect(() => {
        let _name = store.getState().user?.name;
        let jwt = store.getState().user?.jwt_token
        console.log("jwt",jwt);
        

    }, [])
    const onOpen = () => {
        // if (modalizeRef.current) {
        //     console.log(modalizeRef.current);
        //     modalizeRef.current.open();
        //     // setVisible(true)
        // }
        if (select) {
            editUser(id)
        }
        setOpen(true)
    };
    // useEffect(() => {
    //    const user = Realm.create("User"); 

    //     loadUsers();

    //     // Close Realm when component unmounts
    //     return () => {
    //         realm.close();
    //     };
    // }, []);
    useEffect(() => {
        (async () => {
            const realmInstance = await Realm.open(realmConfig);
            setRealm(realmInstance);

            const allUsers = realmInstance.objects('User');
            setUsers([...allUsers]);
            console.log(allUsers);

            return () => {
                realmInstance.close();
            };
        })();
    }, []);
    const addUser = (name, age, email, address) => {
        const newUser = {
            _id: Math.floor(Math.random() * 10),
            name: name,
            age: parseInt(age),
            email: email,
            address: address
        };
        console.log(newUser);

        realm.write(() => {
            realm.create('User', newUser);
        });
        setOpen(false)

        const allUsers = realm.objects('User');
        setOpen(false)
        setUsers([...allUsers]);
        setAddress('')
        setAge('')
        setEmail('')
        setName('')
    };

    const deleteUser = (id) => {
        realm.write(() => {
            const user = realm.objectForPrimaryKey('User', id);
            if (user) {
                realm.delete(user);
            }
        });

        const allUsers = realm.objects('User');
        setUsers([...allUsers]);
    };
    // const loadUsers = () => {
    //     const users = realm.objects('User');
    //     // // setUsers([...users]);
    //     return users;
    // };

    // const addUser = () => {
    //     realm.write(() => {
    //         realm.create('User', { id: Math.floor(Math.random() * 1000), name: name, age: age, address: address, email: email });
    //     });
    //     loadUsers();
    // };

    const updateUser = (id, email, name, age, address) => {
        realm.write(() => {
            let user = realm.objects('User').filtered(`_id = ${id}`)[0];
            if (user) {
                user.name = name;
                user.age = parseInt(age);
                user.email = email;
                user.address = address

            }
        });
        // loadUsers();
        const allUsers = realm.objects('User');
        setUsers([...allUsers]);
        setUsers([...allUsers]);
        setOpen(false)
        setAddress('')
        setAge('')
        setEmail('')
        setName('')
    };
    const editUser = (id) => {
        realm.write(() => {
            let user = realm.objects('User').filtered(`_id = ${id}`)[0];
            if (user) {
                // user.name = name;
                // user.age = age;
                // user.email = email;
                // user.address = address
                console.log(user);
                setName(user.name),
                    setAge(user.age.toString()),
                    setEmail(user.email)
                setAddress(user.address)
            }
        });
        // loadUsers();
        const allUsers = realm.objects('User');
        setUsers([...allUsers]);
    }
    // const deleteUser = (id) => {
    //     realm.write(() => {
    //         let user = realm.objects('User').filtered(`id = ${id}`)[0];
    //         if (user) {
    //             realm.delete(user);
    //         }
    //     });
    //     loadUsers();
    // };
    const { user, setUser } = useContext(UserContext);
    return (
        <View style={[tailwind('flex-1'), { backgroundColor: "#ffffff" }]}>
            <ScrollView contentContainerStyle={{ paddingBottom: 40 }} style={[tailwind('p-5'), { flex: 1, }]}>

                {users.map((item, index) =>
                    <TouchableOpacity onPress={() => { setID(item?._id), setSelect(!select) }} style={[tailwind(''), {
                    }]}>
                        <View style={[tailwind('flex-row justify-between items-center my-3 px-4 py-4'), {
                            borderWidth: 0.6, borderColor: "gray", borderRadius: 6,

                        }]}>
                            <View style={[tailwind(''), { flex: 0.1 }]}>
                                <Image
                                    source={assets_manifest.Group_153}
                                    style={[tailwind(''), { width: 40, height: 40 }]}
                                />
                            </View>
                            <View style={[tailwind('justify-between'), { flex: 0.8 }]}>

                                <Text>name:{item.name}</Text>
                                <Text>age:{item.age}</Text>
                                <Text>email:{item.email}</Text>
                                <Text>Address:{item.address}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>)}

            </ScrollView>

            <View style={[tailwind('flex-row justify-evenly items-center '), { flex: 0.1 }]}>
                <TouchableOpacity onPress={onOpen} style={[tailwind('items-center py-3'), { width: "45%", borderWidth: 1, borderRadius: 10 }]}>
                    <Text>{select ? 'Edit' : 'Add'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteUser(id)
                } style={[tailwind('items-center py-3'), { width: "45%", borderWidth: 1, borderRadius: 10 }]}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
            <Modal onBackButtonPress={() => setOpen(false)} isVisible={open}>
                <View style={[tailwind('flex-1 items-center justify-center px-5'), { backgroundColor: "white", borderRadius: 20 }]}>

                    <PasswordComponent
                        values={"Name"}
                        password={name}
                        setPassword={setName}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                        passwordFocus={passwordFocus}
                        setPasswordFocus={setPasswordFocus}
                        setEmailFocus={setEmailFocus}
                        emailOrMobile={emailOrMobile}
                    />
                    <PasswordComponent
                        values={"Age"}

                        password={age}
                        setPassword={setAge}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                        passwordFocus={passwordFocus}
                        setPasswordFocus={setPasswordFocus}
                        setEmailFocus={setEmailFocus}
                        emailOrMobile={emailOrMobile}
                    />
                    <PasswordComponent
                        values={"Email"}
                        password={email}
                        setPassword={setEmail}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                        passwordFocus={passwordFocus}
                        setPasswordFocus={setPasswordFocus}
                        setEmailFocus={setEmailFocus}
                        emailOrMobile={emailOrMobile}
                    />
                    <PasswordComponent
                        values={"Address"}
                        password={address}
                        setPassword={setAddress}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                        passwordFocus={passwordFocus}
                        setPasswordFocus={setPasswordFocus}
                        setEmailFocus={setEmailFocus}
                        emailOrMobile={emailOrMobile}
                    />
                    <TouchableOpacity onPress={() => { select ? updateUser(id, email, name, age, address) : addUser(name, age, email, address) }} style={[tailwind('items-center mt-16 py-4'), { width: "50%", backgroundColor: '#0097FF', borderRadius: 20 }]}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'red',
        marginHorizontal: 10,
        bottom: 28,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    },
})