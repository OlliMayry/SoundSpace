import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { bookStudio } from '../lib/api'; // lisää tämä import
import { useBookings } from '../context/BookingsContext';

type BookingScreenProps = {
  route: {
    params: {
      studioId: string;
      studioName: string;
      time: string;
    };
  };
  navigation: any;
};

export default function BookingScreen({ route, navigation }: BookingScreenProps) {
  const { studioId, studioName, time } = route.params;
  const { addBooking } = useBookings();

  const handleConfirmBooking = async () => {
    try {
      await bookStudio({ studioId, time });
      addBooking({ studioId, studioName, time });  // Lisätään kontekstiin
      navigation.navigate('Confirmation', { studioName, time });
    } catch (error) {
      Alert.alert('Virhe', 'Varaus epäonnistui. Yritä uudelleen.');
    }
  };

  return (
    <ScreenWrapper>
    <View style={styles.container}>
      <Text style={styles.title}>Vahvista varaus</Text>
      <Text style={styles.info}>Studio: {studioName}</Text>
      <Text style={styles.info}>Aika: {time}</Text>
      <Button title="Varaa" onPress={handleConfirmBooking} />
      <View style={{ height: 16 }} />
      <Button title="Peruuta" color="red" onPress={() => navigation.goBack()} />
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
