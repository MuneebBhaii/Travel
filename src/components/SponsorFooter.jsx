import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SponsorFooter() {
  return (
    <View style={styles.footerSponsor}>
      <Text style={styles.sponsor}>⚡ Nordic Vacation Sponsor</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footerSponsor:{
        flex: 1,
    },
    sponsor:{
        fontSize:14,
        fontWeight:"400",
        lineHeight:21,
        fontFamily:'Poppins',
        color:'rgba(89, 89, 89, 1)',

    }
})