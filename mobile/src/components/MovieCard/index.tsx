import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function MovieCard({navigation, item }: any) {

  const selectMovie = () => {
    console.log("clicou")
    navigation.navigate("MovieInfo", item)
  }

  return (
    <TouchableOpacity onPress={selectMovie}>
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: item.Poster }}
          style={styles.card} />
      </SafeAreaView>
    </TouchableOpacity>
  );
}