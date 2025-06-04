import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App'; // Tarkista polku

const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.header}>
      {/* Vasemman puolen elementti vain tilan vuoksi, ei klikattava */}
      <View style={styles.leftPlaceholder} />

      <TouchableOpacity style={styles.titleContainer} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.title}>SoundSpace</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bookingsButton} onPress={() => navigation.navigate('MyBookings')}>
        <Text style={styles.bookingsText}>My Bookings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'relative',
  },
  leftPlaceholder: {
    width: 80, // sama leveys kuin bookingsButton, jotta otsikko on keskellä
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    pointerEvents: 'auto', // varmistaa että klikattavissa
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bookingsButton: {
    padding: 8,
    backgroundColor: '#005BBB',
    borderRadius: 6,
  },
  bookingsText: {
    color: '#fff',
    fontWeight: '600',
  },
});

