import React from 'react';
import { FlatList, Image, SafeAreaView, View } from 'react-native';
import uuid from 'react-native-uuid';
import data from '../../data/database.json'

import { styles } from './styles';


export function MovieCard() {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={() => uuid.v4()?.toString()}
        numColumns={3}
        renderItem={({ item }: any) => (
          <View style={styles.container}>
            <Image source={{ uri: item?.Poster }}
              style={styles.card} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}