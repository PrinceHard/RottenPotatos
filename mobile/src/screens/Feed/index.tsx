import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import uuid from 'react-native-uuid';
import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';
import { SearchBar } from '../../components/SearchBar';
import dataBase from '../../data/database.json'

import { styles } from './styles';

const numCardsPage = 6

export function Feed({ navigation }: any) {

  const [page, setPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)
  const [inputText, setInputText] = useState('')
  const [data, setData] = useState([{}])

  useEffect(() => {
    if (inputText) {
      axios.get(`http://www.omdbapi.com/?apikey=d95a64b&t=${inputText}`)
        .then((res) => {
          setData(res.data)
        })
    } else {
      paginate()
    }
  }, [inputText])

  const paginate = () => {
    if (inputText) {
      return
    }
    setData(dataBase.filter((movie, index) => {
      return index < page * numCardsPage
    }))
    setPage(page + 1)
    setRefreshing(false)
    console.log(page)
  }

  const reset = useCallback(() => {
    setRefreshing(true)
    setPage(0)
    paginate()
  }, [])

  const renderItem = ({ item }: any) => {
    return (
      <MovieCard navigation={navigation} item={item} />
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar inputText={inputText} setInputText={setInputText} />
      {inputText ? <MovieCard navigation={navigation} item={data} /> :
        <FlatList
          data={data}
          onEndReached={paginate}
          onEndReachedThreshold={0.05}
          onRefresh={reset}
          refreshing={refreshing}
          keyExtractor={() => uuid.v4()?.toString()}
          numColumns={2}
          renderItem={renderItem}
        />
      }
    </View>
  );
}