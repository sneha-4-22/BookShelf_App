// AdminScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const AdminScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  const handleFormSubmit = (bookDetails) => {
    setBooks([...books, bookDetails]);
  };

  const handleEdit = (editedBook) => {
    const updatedBooks = books.map((book) => (book.isbn === editedBook.isbn ? editedBook : book));
    setBooks(updatedBooks);
  };

  const handleRemove = (removedBook) => {
    setBooks(books.filter((book) => book.isbn !== removedBook.isbn));
  };

  return (
    <View style={styles.container}>
      <BookForm onSubmit={handleFormSubmit} />
      <BookList books={books} onEdit={handleEdit} onRemove={handleRemove} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ShowAdminScreen')}
      >
        <Text style={styles.buttonText}>Show Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#C4B0FF'
  },
  buttonContainer: {
    backgroundColor: '#40128B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
  },
});

export default AdminScreen;
