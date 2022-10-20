import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { MovieDetail } from '../../screens/MovieDetail';

import { styles } from './styles';

export function MovieInfo({route}: any) {
  console.log(route.params)
  return (
    <SafeAreaView style={styles.container}>
        <MovieDetail data={route.params}/>
    </SafeAreaView>
  );
}