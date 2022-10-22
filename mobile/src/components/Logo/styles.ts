import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginRight: 10,  
  },
  logo:{
    width: 36,
    height: 36,
  },
  title:{
    fontSize: 18,
    color: THEME.COLORS.TEXT,
    marginLeft: 5
  }

});