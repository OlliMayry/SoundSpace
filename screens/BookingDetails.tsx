import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // varmista oikea polku

type Props = NativeStackScreenProps<RootStackParamList, 'BookingDetails'>;

export default function BookingDetails({ route, navigation }: Props) {
  const { id, studioName, time } = route.params;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Varaus #{id}</Text>
        <Text style={styles.info}>Studio: {studioName}</Text>
        <Text style={styles.info}>Aika: {time}</Text>
        <View style={{ height: 24 }} />
        <Button title="Takaisin" onPress={() => navigation.goBack()} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
});
