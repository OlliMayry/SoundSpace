import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import ScreenWrapper from '../components/ScreenWrapper';
import { useBookings } from '../context/BookingsContext';

export default function MyBookingsScreen() {
  const { bookings } = useBookings();

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Omat varaukset</Text>
        {bookings.length === 0 ? (
          <Text>Sinulla ei ole varauksia.</Text>
        ) : (
          <FlatList
            data={bookings}
            keyExtractor={(item) => `${item.studioId}-${item.time}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.bookingItem}
                onPress={() =>
                  navigation.navigate('BookingDetails', {
                    id: `${item.studioId}-${item.time}`,
                    studioName: item.studioName,
                    time: item.time,
                  })
                }
              >
                <Text style={styles.bookingText}>Studio: {item.studioName}</Text>
                <Text style={styles.bookingText}>Aika: {item.time}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 24, textAlign: 'center' },
  bookingItem: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  bookingText: { fontSize: 16 },
});

