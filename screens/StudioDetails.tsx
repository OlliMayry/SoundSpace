import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { studios } from '../lib/mockStudios';  // Tuo data

type StudioDetailsProps = {
  route: {
    params: {
      studioId: string;
    };
  };
  navigation: any;
};

export default function StudioDetails({ route, navigation }: StudioDetailsProps) {
  const { studioId } = route.params;
  const studio = studios.find((s) => s.id === studioId);

  if (!studio) {
    return (
      <View style={styles.center}>
        <Text>Studioa ei löytynyt.</Text>
      </View>
    );
  }

  const handleBooking = (time: string) => {
    navigation.navigate('Booking', {
      studioId: studio.id,
      studioName: studio.name,
      time,
    });
  };

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: studio.image }} style={styles.image} />
        <Text style={styles.name}>{studio.name}</Text>
        <Text style={styles.location}>{studio.location}</Text>
        <Text style={styles.description}>{studio.description}</Text>

        <Text style={styles.availableTitle}>Vapaat ajat:</Text>
        {studio.availableTimes.length > 0 ? (
          studio.availableTimes.map((time) => (
            <View key={time} style={styles.timeSlot}>
              <Text>{time}</Text>
              <Button title="Varaa" onPress={() => handleBooking(time)} />
            </View>
          ))
        ) : (
          <Text>Ei vapaita aikoja tällä hetkellä.</Text>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  availableTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  timeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});
