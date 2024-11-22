import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageCard = ({ name, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.experience}>Опыт изучения: {experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  experience: {
    fontSize: 14,
    color: '#555',
  },
});

export default LanguageCard;