import React from 'react';
import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles';

export function MovieDetail({ data }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: "http://192.168.15.9:5013/" + data.poster }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.rating}>{data?.imdb_rating} (IMDb)</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.detailContainer}>
          <View style={{marginRight: 50}}>
            <Text style={styles.subTitle}>Data de Lançamento</Text>
            <Text style={styles.text}>{data?.released}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Genêro</Text>
            <Text style={styles.text}>{data?.genre}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.subTitle}>Sinopse</Text>
          <Text style={styles.text}>{data?.plot}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}