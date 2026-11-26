import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section6() {
    return (
        <View style={{ flexDirection: "column", marginHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderColor: "#ddd" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Location</Text>
            <Text style={{ fontSize: 12, color: "#444" }} numberOfLines={2}>
                218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 425 / 172 }} source={require("@/assets/week3/map.jpg")} />
            </View>
        </View>
    );
}
