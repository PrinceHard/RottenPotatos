import React from 'react';
import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';



export function MovieDetail({ data }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: data?.Poster }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{data?.Title}</Text>
          <Text style={styles.rating}>{data?.imdbRating} (IMDb)</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.detailContainer}>
          <View style={{marginRight: 100}}>
            <Text style={styles.subTitle}>Release date</Text>
            <Text style={styles.text}>{data?.Released}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Genre</Text>
            <Text style={styles.text}>{data?.Genre}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.subTitle}>Synopsis</Text>
          <Text style={styles.text}>{data?.Plot}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}