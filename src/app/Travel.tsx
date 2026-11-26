import React from "react";
import { ScrollView, Text, View } from "react-native";
import Signup from "@/components/Week3/Signup";
import Card from "@/components/Week3/Card";
import Hotel from "@/components/Week3/Hotel";
import Menu from "@/components/Week3/Menu";

export default function Travel() {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text>Text of Week 3 </Text>
      </View>
      <Menu />
      <Card />
      <Hotel />
      <Signup />
    </ScrollView>
  );
}
