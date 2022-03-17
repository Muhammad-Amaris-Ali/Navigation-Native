import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = (props) => {
  


 
  return (
    <ScrollView>
      <View style={styles.main}>
        <TouchableOpacity
         
        >
            <Text>Open me</Text>
        </TouchableOpacity>
        <Text>HomeScreen</Text>
        {/* <Text>{props.route.params.text}</Text> */}

        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate("Settings")}
        >
          <Text style={{ color: "white" }}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

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
