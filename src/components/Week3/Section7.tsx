import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section7() {
    return (
        <View style={{ marginHorizontal: 15, paddingVertical: 10 }}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Room Type</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View>
                    <Image style={{ width: 80, height: 90, borderRadius: 5 }} source={require("@/assets/week3/room-8.jpg")} />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Standard Twin Room</Text>
                    <Text style={{ fontSize: 18, color: "#e8664f" }}>$399.99</Text>
                    <Text style={{ fontSize: 12, color: "#4a8fa5" }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}
