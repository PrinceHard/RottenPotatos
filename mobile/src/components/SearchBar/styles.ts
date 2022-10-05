import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  bar:{
    fontFamily: THEME.FONT_FAMILY.DEFAULT.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    color: '#FFF'
  }
});