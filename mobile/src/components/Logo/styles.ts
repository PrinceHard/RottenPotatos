import { StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20    
  },
  logo:{
    width: 36,
    height: 36,
  },
  title:{
    fontSize: 15,
    color: THEME.COLORS.TEXT,
    marginLeft: 5
  }

});