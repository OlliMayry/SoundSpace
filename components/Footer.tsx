// components/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Studio Booking App</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    height: 40,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#666',
    fontSize: 14,
  },
});
