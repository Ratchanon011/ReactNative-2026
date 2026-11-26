import React from 'react';
import { View, Text } from 'react-native';

export default function Section3() {
    return (
        <View style={{ padding: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: "#e8664f", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 16 }}>9.5</Text>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ color: "#e8664f", fontSize: 16 }}>Excellent</Text>
                    <Text style={{ fontSize: 12 }}>See 801 reviews</Text>
                </View>
            </View>
        </View>
    );
}
