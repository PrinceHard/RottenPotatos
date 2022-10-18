import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

export function MovieDetail(data: Movie) {
  return (
    <View style={styles.container}>
        <Image 
            source={{uri: data.Poster}}
            style={styles.image}
        />
    </View>
  );
}