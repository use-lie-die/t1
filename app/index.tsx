import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LanguageCard from '../components/languages.js';

const App = () => {
  const programmingLanguages = [
    {
      id: '1',
      name: 'JavaScript',
      experience: '2 года',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      id: '2',
      name: 'Python',
      experience: '1 год',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    },
    {
      id: '3',
      name: 'C#',
      experience: '3 года',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={programmingLanguages}
        renderItem={({ item }) => (
          <LanguageCard
            name={item.name}
            experience={item.experience}
            logo={item.logo}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
