import React from 'react';
import { View } from 'react-native';
import MyIcon from './MyIcon';

export default function Section5() {
    return (
        <View style={{ flexDirection: "row", marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderColor: "#ddd" }}>
            <MyIcon title="wifi" name="wifi" size={24} color="#4a8fa5" />
            <MyIcon title="coffee" name="mug-saucer" size={24} color="#4a8fa5" />
            <MyIcon title="bath" name="bath" size={24} color="#4a8fa5" />
            <MyIcon title="car" name="car" size={24} color="#4a8fa5" />
            <MyIcon title="paw" name="paw" size={24} color="#4a8fa5" />
        </View>
    );
}
