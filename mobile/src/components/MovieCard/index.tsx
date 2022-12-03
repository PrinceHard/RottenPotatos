import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function MovieCard({navigation, item }: any) {

  const selectMovie = () => {
    console.log("clicou")
    navigation.navigate("MovieInfo", {id: item.id})
  }

  return (
    <TouchableOpacity onPress={selectMovie}>
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: "http://192.168.15.9:5013/"+ item.poster }}
          style={styles.card} />
      </SafeAreaView>
    </TouchableOpacity>
  );
}