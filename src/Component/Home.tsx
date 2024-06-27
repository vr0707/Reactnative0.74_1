import { View, Text, Button, TextInput } from 'react-native'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import store from '../../Redux'
import { useDispatch } from 'react-redux';
import { setName } from '../../Redux/actions/action';
import tailwind from '@tailwind';
import { getHomeData } from '../../src/remote/userRemote';
import requestServers from '../../workers/requestServers';
import { closeDB, createTable, initDB } from '../../workers/Database';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../src/UserContext/UserContext';

export default function Home() {
    const { user, setUser } = useContext(UserContext);

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const [val, setVal] = useState('');
    const [trig, setTrig] = useState('')
    useEffect(() => {
        // getData()
        getHomeData("").then((res) => {
            console.log(res);

        }).catch((e) => {
            console.log(e);

        })
    }, [])
    useEffect(() => {
        let _name = store.getState().user?.name;
        setVal(_name ? _name : "");
        console.log(_name);

    }, [trig])
    const getData = () => {
        // const getDatas = getHomeData("");
        // console.log(getDatas);

        // return getDatas;
        // requestServers("GET", "https://graphicnewsplus.dci.in/api/customer/my_subscriptions", {}).then((res) => {
        //     console.log(res);

        // }).catch((e) => {
        //     console.log(e);

        // })
    }
    const changeTheme = () => {

    };
    const timerRef = useRef(null);
    const [time, setTime] = useState(0);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        console.log(time);

    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
    };
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        let result = 0;
        for (let i = 0; i < 1000; i++) {

            result += num;
        }
        console.log(result);
        return result;
    };
    function calculateVolume(length) {
        return function (breadth) {
            return function (height) {
                return length * breadth * height;
            }
        }
    }

    const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);
    console.log(calculateVolume(4)(5)(6))
    function fibonacci(n) {
        if (n <= 1) return n;
        console.log(n);
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    console.log(fibonacci(10));
    useEffect(() => {
        const setupDB = async () => {
            await initDB();
            await createTable();
        };

        setupDB();

        return () => {
            closeDB();
        };
    }, []);
    return (
        <View style={[tailwind('flex-1 items-center justify-center')]}>
            {/* <Text style={[tailwind('font-20')]}>{val}</Text>
            <Button title='Press Me' onPress={() => {
                dispatch(setName("Hello World"))
                setTrig("heee")
            }} />
             <Button title="Start Timer" onPress={startTimer} />
            <Button title="Stop Timer" onPress={stopTimer} />
            <Text>Time: {time}</Text> */}
            {/* <Button title="Start Timer" onPress={} /> */}

            <Text>Count: {count}</Text>
            <Text>Calculated Value: {calculatedValue}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
            <Button title="change Theme" onPress={() => changeTheme} />
            <Button title="navigation" onPress={() => { navigation.navigate("Second"), setUser({ name: 'John Doe', age: 30 }); }} />
            {/* <Button onClick={changeTheme}>Change Theme</Button> */}

            <Text>Input: {input}</Text>
            <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
        </View>
    )
}