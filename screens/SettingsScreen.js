import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const SettingsScreen = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text>SettingsScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
