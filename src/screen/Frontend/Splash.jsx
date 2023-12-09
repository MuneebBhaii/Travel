import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Splash() {
  const navigation = useNavigation()

  useEffect(()=>{
    const timeout = setTimeout(replaceScreen, 2000)
    return () => clearTimeout(timeout)
  } , [])

  const replaceScreen = () => {
    navigation.navigate("Page1")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../asets/logo/Logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#667778'
  },
  img:{
    width:150,
    height:150,
  }
})