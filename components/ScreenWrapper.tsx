import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

type ScreenWrapperProps = {
  children: React.ReactNode;
};

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <View style={styles.outerContainer}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.innerContent}>
          {children}
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 40, // pieni väli footerin jälkeen, valinnainen
  },
  innerContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
