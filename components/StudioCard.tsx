import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type StudioCardProps = {
  id: string;
  name: string;
  location: string;
  image: string;
  onPress: () => void;
};

const StudioCard = ({ id, name, location, image, onPress }: StudioCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StudioCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

