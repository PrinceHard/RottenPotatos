import { View, StyleSheet, StatusBar } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import { Header } from './src/components/Header';
import { Feed } from './src/screens/Feed';
import { Loading } from './src/components/Loading';
import { MovieCard } from './src/components/MovieCard';

export default function App() {
  const [fontsLoad] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      {fontsLoad ? <Feed /> : <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F'
  },

});

