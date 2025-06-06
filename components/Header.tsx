import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App'; // Tarkista tämä polku

const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.header}>
      {/* Vasemmalla logo */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.logo}>SoundSpace</Text>
      </TouchableOpacity>

      {/* Keskellä navigointilinkit */}
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Studios</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyBookings')}>
          <Text style={styles.link}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={() => navigation.navigate('About')} */>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>
      </View>

      {/* Oikealla käyttäjäikoni */}
      <TouchableOpacity /* onPress={() => navigation.navigate('Profile')} */>
        <FontAwesome name="user-o" size={20} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#f7f8f9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 20, // toimii uusimmissa RN-versioissa
  },
  link: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
});

