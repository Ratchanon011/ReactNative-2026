import React from 'react';
import { View, Text } from 'react-native';

export default function Section4() {
    return (
        <View style={{ marginHorizontal: 15, paddingVertical: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#ddd" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Hotel Description</Text>
            <Text style={{ fontSize: 12, color: "#444" }}>
                218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
            </Text>
        </View>
    );
}
