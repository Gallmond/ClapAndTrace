import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👏 & 🔎</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 70,
    fontFamily: 'normal',
    color: 'black'
  }
});

export default Logo;