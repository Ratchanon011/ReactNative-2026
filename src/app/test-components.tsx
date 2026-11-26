import React from "react";
import { ScrollView, Image, View, Text } from "react-native";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";

export default function TestComponent() {
  return (
    <ScrollView style={{ margin: 20 }}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 50, height: 50 }}
      />
      <View style={{ flexDirection: "column" }}>
        {/* Fixed Size */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <Image
            style={{ width: 100, height: 50 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Image
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>หัวใจ</Text>
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
