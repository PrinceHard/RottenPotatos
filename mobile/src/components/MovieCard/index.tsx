import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';


import { styles } from './styles';

export function MovieCard({ item }: string | any) {
  return (
    <TouchableOpacity>
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: item?.Poster }}
          style={styles.card} />
      </SafeAreaView>
    </TouchableOpacity>
  );
}