import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { MovieDetail } from '../../screens/MovieDetail';

import { styles } from './styles';

export function MovieInfo({route}: any) {

  const [movieInfo, setMovieInfo] = useState({})

  useEffect(() =>{
    axios.get(`http://192.168.15.9:5011/serie/${route.params.id}`)
    .then((res) => {
      setMovieInfo(res.data)
      console.log(res.data)
    })
  })
  return (
    <SafeAreaView style={styles.container}>
        <MovieDetail data={movieInfo}/>
    </SafeAreaView>
  );
}