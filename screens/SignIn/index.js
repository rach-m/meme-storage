import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, TouchableHighlight, Platform, Image } from "react-native"
import { GOOGLE_CLIENT_ID_ANDROID, GOOGLE_CLIENT_ID_IOS } from "react-native-dotenv"
import * as Google from "expo-google-app-auth"
import { Positioning, Color, Buttons } from "../../styles"


function SignIn({ navigation }) {
  const isAndroid = () => Platform.OS === 'android';
  let [signedIn, setSignedIn] = useState(false)
  let [name, setName] = useState("")
  let [photoUrl, setPhotoUrl] = useState("")


  const signIn = async () => {
    try {
      const result = await Google.logInAsync({
        clientId: isAndroid() ? GOOGLE_CLIENT_ID_ANDROID : GOOGLE_CLIENT_ID_IOS,
        scopes: ["profile", "email"]
      })
      if (result.type === "success") {
        setSignedIn(true)
        setName(result.user.name)
        setPhotoUrl(result.user.photoUrl)
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  useEffect(() => { signedIn ? navigation.navigate("Home", { signedIn, name, photoUrl }) : null }, [signedIn])
  return (
    <View style={styles.screen}>
      <Image source={require("../../assets/logo.png")}></Image>
      <TouchableHighlight style={styles.button} onPress={() => signIn()}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableHighlight>
    </View>
  )

}

export default SignIn

const styles = StyleSheet.create({
  screen: {
    ...Positioning.centerScreen,
    ...Color.blackBackground
  },
  button: {
    ...Buttons.mediumRounded,
    ...Positioning.centerText,
  },
  buttonText: {
    ...Color.whiteText
  }
})
