// components/ScreenWrapper.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
