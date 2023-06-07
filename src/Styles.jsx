import {StyleSheet} from 'react-native';

const colors = {
  primary: '#1f145c',
  white: '#fffe',
};

export default styles = StyleSheet.create({
  header: {
    padding: 20,
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  numberTodos: {
    fontSize: 18,
    padding:10,
    margin:12,
    color: "#605252"
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.primary,
    margin: 20,
    marginTop: 40,
  },
  listItem: {
    padding: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    margin: 5,
  },
});
