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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, StackActions, StackRouter } from '@react-navigation/native';
import { MovieInfo } from './src/components/MovieInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoad] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{"header": Header}}>
          <Stack.Screen name='Home' component={Feed}/>
          <Stack.Screen name='MovieInfo' component={MovieInfo}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F'
  },

});

