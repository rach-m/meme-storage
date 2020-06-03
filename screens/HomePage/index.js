import React from "react"
import { Text, Button } from "react-native"

function HomePage({ navigation }) {
  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Album')}
    />)
}

export default HomePage
