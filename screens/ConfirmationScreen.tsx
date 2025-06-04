import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

type Props = {
  route: {
    params: {
      studioName: string;
      time: string;
    };
  };
  navigation: any;
};

export default function ConfirmationScreen({ route, navigation }: Props) {
  const { studioName, time } = route.params;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Varaus vahvistettu!</Text>
        <Text style={styles.text}>Studio: {studioName}</Text>
        <Text style={styles.text}>Aika: {time}</Text>
        <View style={{ height: 24 }} />
        <Button title="Takaisin etusivulle" onPress={() => navigation.navigate('Home')} />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
});
