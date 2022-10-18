import React from 'react';
import { SafeAreaView } from 'react-native';
import { Logo } from '../Logo';

export function Header() {
  return (
    <SafeAreaView>
      <Logo />
    </SafeAreaView>
  );
}