import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    marginTop:32,
    marginLeft: 20,
    marginRight: 20,
  },
  bar:{
    flex: 1,
    fontFamily: THEME.FONT_FAMILY.DEFAULT.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    alignSelf: 'stretch',
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