import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

export default function MyIcon(props:any) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress } >
        <FontAwesome6 name={props.name} size={props.size} color={props.color} iconStyle="solid" />
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
