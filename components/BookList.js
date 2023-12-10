import React from 'react';
import { View, Text, FlatList } from 'react-native';

const BookList = ({ books, onEdit, onRemove }) => {
  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.isbn.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.bookName}</Text>
          <Text>{item.isbn}</Text>
          {/* Add other book details */}
          <Button title="Edit" onPress={() => onEdit(item)} />
          <Button title="Remove" onPress={() => onRemove(item)} />
        </View>
      )}
    />
  );
};

export default BookList;
