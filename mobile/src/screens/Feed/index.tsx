import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import uuid from 'react-native-uuid';
import { Header } from '../../components/Header';
import { MovieCard } from '../../components/MovieCard';
import { SearchBar } from '../../components/SearchBar';

import { styles } from './styles';

const numCardsPage = 6

export function Feed({ navigation }: any) {

  const [page, setPage] = useState(1)
  const [refreshing, setRefreshing] = useState(false)
  const [inputText, setInputText] = useState('')
  const [data, setData] = useState<any>([])

  useEffect(() => {
    if (inputText.length > 0) {
      axios.get(`http://192.168.15.9:5010/pesquisar/${inputText}`)
        .then((res) => {
          console.log(res.data)
          if (res.data) {
            setData([res.data])
          }
        }).catch((err) => {
          console.log(err)
        })
    } else {
      reset()
    }
  }, [inputText])

  const paginate = () => {
    if (inputText) {
      return
    }
    axios.get(`http://192.168.15.9:5010/series/${page}/${numCardsPage}`)
      .then((res) => {
        console.log("linha 42" + res.data)
        if (res.data.length > 0) {
          setData([...data, ...res.data])
        }
      }
      ).catch((err) => {
        console.log(err)
      })
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

    </View>
  );
}