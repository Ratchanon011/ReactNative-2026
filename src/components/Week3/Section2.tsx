import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

export default function Section2() {
    return (
        <View style={{
            flex: 1, marginTop: -25, marginHorizontal: 15, padding: 10,
            backgroundColor: "white", borderRadius: 5,
            elevation: 5, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 4, shadowOffset: { width: 0, height: 2 },
        }}>
            <Text style={{ textAlign: "center", fontSize: 20 }}>Hilton San Francisco</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 5 }}>
                <FontAwesome6 name="star" size={12} color="#f5b301" iconStyle="solid" />
                <FontAwesome6 name="star" size={12} color="#f5b301" iconStyle="solid" />
                <FontAwesome6 name="star" size={12} color="#f5b301" iconStyle="solid" />
                <FontAwesome6 name="star" size={12} color="#f5b301" iconStyle="solid" />
                <FontAwesome6 name="star-half-stroke" size={12} color="#f5b301" iconStyle="solid" />
            </View>
            <Text style={{ textAlign: "center", fontSize: 12, color: "#444" }}>
                Facilities provided may range from a modest quality mattress in a small room to large suites
            </Text>
        </View>
    );
}
