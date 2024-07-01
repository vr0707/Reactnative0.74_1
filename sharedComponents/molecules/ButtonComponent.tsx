import { View, Text } from 'react-native';
import React from 'react';
import tailwind from '@tailwind';
import LinearGradient from 'react-native-linear-gradient';

interface Prototype {
  text: string;
}

export default function ButtonComponent(props: Prototype) {
  return (
    <LinearGradient useAngle={true} angle={270} colors={['#0097FF', '#0071BF']} style={[tailwind(''), { borderRadius: 50, alignItems: "center", justifyContent: "center", padding: 10 }]} >
      <Text style={[tailwind('text-white font-16')]}>{props.text}</Text>
    </LinearGradient>
  );
}
