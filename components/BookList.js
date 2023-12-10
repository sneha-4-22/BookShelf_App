import React from 'react';
import { View, Text, FlatList , Button  ,StyleSheet} from 'react-native';

const BookList = ({ books, onEdit, onRemove }) => {
  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.isbn.toString()}
      renderItem={({ item }) => (
        <View style={styles.bookContainer}>
          <Text style={styles.bookName}>{item.bookName}</Text>
          <Text style={styles.isbn}>{item.isbn}</Text>
          <Button title="Edit" onPress={() => onEdit(item)} color="#6554AF"/>
          <Button title="Remove" onPress={() => onRemove(item)} color="#9575DE"  />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
    bookContainer: {
      backgroundColor: '#DFCCFB',
      borderRadius: 8,
      padding: 16,
      marginBottom: 10,
      elevation: 3,
    },
    bookName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color:"#2A2F4F"
    },
    isbn: {
      color: 'gray',
      color:"black",
      fontWeight: 'bold'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
  });
export default BookList;
