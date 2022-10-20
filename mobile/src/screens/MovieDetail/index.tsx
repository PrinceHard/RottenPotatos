import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export function MovieDetail({ data }: any) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data?.Poster }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>{data?.Title}</Text>
        <Text style={styles.rating}>{data?.imdbRating}(IMDb)</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Release date</Text>
        <Text style={styles.text}>{data?.Released}</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Genre</Text>
        <Text style={styles.text}>{data?.Genre}</Text>
      </View>
      <View>
        <Text style={styles.subTitle}>Synopsis</Text>
        <Text style={styles.text}>{data?.Plot}</Text>
      </View>
    </View>
  );
}