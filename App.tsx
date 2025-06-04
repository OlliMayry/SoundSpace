import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookingsProvider } from './context/BookingsContext';

import HomeScreen from './screens/HomeScreen';
import StudioDetails from './screens/StudioDetails';
import BookingScreen from './screens/BookingScreen';
import ConfirmationScreen from './screens/ConfirmationScreen'; 
import MyBookingsScreen from './screens/MyBookingsScreen'; 
import BookingDetails from './screens/BookingDetails';

export type RootStackParamList = {
  Home: undefined;
  StudioDetails: { studioId: string };
  Booking: { studioId: string; studioName: string; time: string };
  Confirmation: { studioName: string; time: string }; // ✅ Lisää tämä
  MyBookings: undefined; 
  BookingDetails: { id: string; studioName: string; time: string }; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <BookingsProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Studios' , headerLeft: () => null }} />
        <Stack.Screen name="StudioDetails" component={StudioDetails} options={{ title: 'Studio Details' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Varaus' }} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Vahvistus' }} />
        <Stack.Screen name="MyBookings" component={MyBookingsScreen} options={{ title: 'Omat varaukset' }} />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
      </Stack.Navigator>
      </BookingsProvider>
    </NavigationContainer>
  );
}
