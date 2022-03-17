import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LoginScreen = (props) => {
  const [text, setText] = useState("");

  console.log(text);

  return (
    <ScrollView>
      <View style={styles.main}>
        <TextInput
          value={text}
          onChangeText={(e) => setText(e)}
          placeholder="Type"
        />
        <Text>Login Screen</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            props.navigation.navigate("Home", {
              text,
            })
          }
        >
          <Text style={{ color: "white" }}>Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    minHeight: hp("100%"),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    height: 40,
    width: 140,
    backgroundColor: "black",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
});
