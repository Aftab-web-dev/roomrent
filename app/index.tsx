import Button from '@/constants/Button';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
      <Button/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
  },
  text: {
    fontFamily: 'RalewayRegular', // Assuming you have set up the custom font
    fontSize: 18,
    color:"#fff"
  },
});

export default Index;
