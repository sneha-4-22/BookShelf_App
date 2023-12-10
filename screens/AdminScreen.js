import React, { useState } from 'react';
import { View, Button } from 'react-native';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const AdminScreen = () => {
  const [books, setBooks] = useState([]);

  const handleFormSubmit = (bookDetails) => {
    // Validate and add the book to the list
    setBooks([...books, bookDetails]);
  };

  const handleEdit = (editedBook) => {
    // Implement logic to edit the book details
  };

  const handleRemove = (removedBook) => {
    // Implement logic to remove the book from the list
    setBooks(books.filter((book) => book.isbn !== removedBook.isbn));
  };

  return (
    <View>
      <BookForm onSubmit={handleFormSubmit} />
      <BookList books={books} onEdit={handleEdit} onRemove={handleRemove} />
      <Button title="Show Admin" onPress={() => navigation.navigate('ShowAdmin')} />
    </View>
  );
};

export default AdminScreen;
