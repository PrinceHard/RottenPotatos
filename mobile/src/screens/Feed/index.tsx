import React from 'react';
import { View } from 'react-native';
import { MovieCard } from '../../components/MovieCard';

import { styles } from './styles';

export function Feed() {
  return (
    <View style={styles.container}>
        <MovieCard/>
    </View>
  );
}