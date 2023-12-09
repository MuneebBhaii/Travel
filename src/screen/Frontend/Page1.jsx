import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SponsorFooter from '../../components/SponsorFooter'

export default function Page1() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../asets/image/Traveling1.png')} />
      <Text style={styles.maintext}>Make your own private travel plan</Text>
      <Text style={styles.paragraph}>Formulate your strategy to receive wonderful gift packs</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
        <Image style={styles.btnIcon} source={require('../../asets/icon/iconNext.png')} />
      </TouchableOpacity>
      {/* <Text>⚡ Nordic Vacation Sponsor</Text>  */}
      {/* <SponsorFooter/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 340,
    height: 250,
  },
  maintext: {
    width: 300,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
    lineHeight: 42,
    marginVertical: 10,
    color: "rgba(0, 0, 0, 1)"
  },
  paragraph: {
    width: 300,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Poppins',
    textAlign: 'center',
    lineHeight: 27,
    color: "rgba(180, 180, 180, 1)"
  },
  btn: {
    backgroundColor: 'rgba(3, 115, 243, 1)',
    padding: 15,
    border: "none",
    borderRadius: 50,
    marginVertical: 20
  },
  btnIcon: {
    width: 34,
    height: 34,
  },
  sponsor: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    fontFamily: 'Poppins',
    color: 'rgba(89, 89, 89, 1)',
    backgroundColor:'red'

  }
})