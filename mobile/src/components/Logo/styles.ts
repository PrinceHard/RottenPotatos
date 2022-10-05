import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    top: 45,
    left: 20    
  },
  logo:{
    width: 36,
    height: 36,
  },
  title:{
    fontFamily: THEME.FONT_FAMILY.DEFAULT.BOLD,
    fontSize: 15,
    color: THEME.COLORS.TEXT,
    marginTop: 9,
    marginLeft: 5
  }

});