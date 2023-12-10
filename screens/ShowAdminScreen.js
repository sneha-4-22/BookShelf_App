import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import BookList from '../components/BookList';

const ShowAdminScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = () => {
    // Implement search logic
    const result = books.filter(
      (book) =>
        book.isbn.includes(searchText) || book.bookName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(result);
  };

  return (
    <View>
      <TextInput value={searchText} onChangeText={setSearchText} />
      <Button title="Search" onPress={handleSearch} />
      <BookList books={filteredBooks} />
    </View>
  );
};

export default ShowAdminScreen;
