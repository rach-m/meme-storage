import React from "react"
import { Text, Image, View, StyleSheet } from "react-native"
import { Positioning, Color } from "../../styles"

function SplashPage({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Auth')
  }, 5000);
  return (
    <View style={styles.screen}>
      <Image source={require("../../assets/logo.png")}></Image>
    </View>)
}

export default SplashPage

const styles = StyleSheet.create({
  screen: {
    ...Positioning.centered,
    ...Color.black
  }
})
