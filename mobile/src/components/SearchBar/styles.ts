import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
  container:{
    margin: 20,
    alignSelf: 'stretch',
  },
  bar:{
    fontFamily: THEME.FONT_FAMILY.DEFAULT.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    paddingLeft: 20,
    height: 45,
    color: '#fff',
    borderRadius: 8,
    backgroundColor: '#000'
  },
  icon:{
    color: '#fff',
    fontSize: THEME.FONT_SIZE.SM,
    marginRight: 5
  }
});