import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'tomato'
  },
  headerCartContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
  },
  basketContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray'
  },
  bookContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 8
  },
  image: {
    height: 125,
    resizeMode: 'contain'
  },
  bookInfoContainer: {
    flex: 3,
    paddingHorizontal: 8,
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  author: {
    color: 'gray',
    fontStyle: 'italic'
  },
  description: {
    color: 'gray',
    fontSize: 10
  },
  buttonText:{
    color: 'white',marginHorizontal:4 
  },
  buttonContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 12,
    padding: 8,
    alignSelf: 'flex-start',
    backgroundColor: 'tomato',
    alignItems: 'center'
  }
});

export default styles;
