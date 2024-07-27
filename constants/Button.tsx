import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {StyleSheet } from 'react-native';
const Button = () => {
  return (
    <><LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.background} /><LinearGradient
              // Button Linear Gradient
              colors={['#A0DAFB', '#0A8ED9']}
              style={styles.button}>
              <Text style={styles.text}>House</Text>
          </LinearGradient></>
  )
}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'RalewayMedium', // Assuming you have set up the custom font
      fontSize: 25,
      color:"#fff"
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 10,
    },
  });
  
export default Button