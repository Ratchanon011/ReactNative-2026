import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Section8() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 15, borderTopWidth: 1, borderColor: "#ddd" }}>
            <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 12 }}>Price</Text>
                <Text style={{ fontSize: 18, color: "#e8664f" }}>$399.99</Text>
                <Text style={{ fontSize: 12 }}>AVG/Night</Text>
            </View>
            <View>
                <Button title="Book Now" color="#e8664f" onPress={() => {}} />
            </View>
        </View>
    );
}
