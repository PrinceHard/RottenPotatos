import React from 'react';
import { FlatList, View } from 'react-native';
import uuid from 'react-native-uuid';
import { MovieCard } from '../../components/MovieCard';
import { SearchBar } from '../../components/SearchBar';
import data from '../../data/database.json'

import { styles } from './styles';

const renderItem = ({ item }: any) => {
  // console.log(item.Poster)
  return (
    < MovieCard item={item} />
  )
}

export function Feed() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={data}
        keyExtractor={() => uuid.v4()?.toString()}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
  );
}