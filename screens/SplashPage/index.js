import React from "react"
import { Text, Image, View, StyleSheet } from "react-native"
import { Positioning, Color } from "../../styles"

function SplashPage() {

  return (
    <View style={styles.screen}>
      <Image source={require("../../assets/logo.png")}></Image>
      <Text>Splash!</Text>
    </View>)
}

export default SplashPage

const styles = StyleSheet.create({
  screen: {
    ...Positioning.centered,
    ...Color.black

  }
})
