// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // Polku voi vaihdella – säädä tarvittaessa
import ScreenWrapper from '../components/ScreenWrapper';
import StudioCard from '../components/StudioCard';
import { studios } from '../lib/mockStudios';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  const renderItem = ({ item }: any) => (
  <StudioCard
    id={item.id}
    name={item.name}
    location={item.location}
    image={item.image}
    onPress={() => navigation.navigate('StudioDetails', { studioId: item.id })}
  />
);

  return (
    <ScreenWrapper>
      <FlatList
        data={studios}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20, padding: 16 }}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
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