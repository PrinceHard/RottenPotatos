import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../Theme';

const dimensions = Dimensions.get('window');
const width = dimensions.width

export const styles = StyleSheet.create({
  container:{
    backgroundColor: '#15141F',
    height: 950
  },
  imgContainer: {
    alignContent: 'stretch',
    top: 0,
    right: 0
  },
  infoContainer: {
    marginRight: 20,
    marginLeft: 20,
  },
  detailContainer:{
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginTop: 15
  },
  subTitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 15,
    fontWeight: '500',
  },
  text: {
    color: '#bbb',
    marginTop: 5
  },
  rating: {
    color: '#bbbbbb',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5
  },
  line:{
    borderBottomWidth: 1,
    borderColor: '#515151',
    marginTop: 10
  },
  image: {
    width: width,
    height: 500,
  }
});