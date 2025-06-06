import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.column}>
        <Text style={styles.logo}>SoundSpace</Text>
        <Text style={styles.slogan}>Start creating something unique</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.columnTitle}>Links</Text>
        {['Home', 'Search Studios', 'Log In', 'About us'].map((item) => (
          <TouchableOpacity key={item}>
            <Text style={styles.link}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.column}>
        <Text style={styles.columnTitle}>For Studio owners</Text>
        {['List your studio', 'Control panel', 'Pricing', 'FAQ'].map((item) => (
          <TouchableOpacity key={item}>
            <Text style={styles.link}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.column}>
        <Text style={styles.columnTitle}>Contact</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:contact@soundspace.fi')}>
          <Text style={styles.link}>contact@soundspace.fi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('tel:0409673368')}>
          <Text style={styles.link}>040 967 3368</Text>
        </TouchableOpacity>
        <View style={styles.iconRow}>
          <FontAwesome name="instagram" size={20} color="#333" style={styles.icon} />
          <FontAwesome name="facebook" size={20} color="#333" style={styles.icon} />
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Terms of use</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#ddd',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  column: {
    width: '45%',
    marginVertical: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  slogan: {
    marginTop: 4,
    fontSize: 14,
    color: '#444',
  },
  columnTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 15,
    color: '#111',
  },
  link: {
    color: '#003366',
    marginBottom: 4,
    fontSize: 14,
  },
  iconRow: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  icon: {
    marginRight: 12,
  },
});
