import React from 'react';
import { View, Image, Text } from 'react-native';
import { Logo } from '../Logo';
import { SearchBar } from '../SearchBar';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Logo/>
      <SearchBar/>
    </View>
  );
}