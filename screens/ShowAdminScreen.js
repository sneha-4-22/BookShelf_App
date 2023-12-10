import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ShowAdminScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState([
    { isbn: '123456', bookName: 'Atomic Habits' },
    { isbn: '789012', bookName: 'It ends with Us' },
    { isbn: '123457', bookName: 'Master Mind' },
    { isbn: '987653', bookName: 'The Secret' },
    { isbn: '128456', bookName: 'Wish I Could Tell You' },
    { isbn: '709012', bookName: 'Start Up' },
    { isbn: '123957', bookName: 'Shooting Stars' },
    { isbn: '977653', bookName: 'One Arranged Murder' },
    { isbn: '677653', bookName: 'Alive' },
  ]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleSearch = () => {
    const result = books.filter(
      (book) =>
        book.isbn.includes(searchText) || book.bookName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(result);
  };

  const handleBookPress = (isbn) => {
    navigation.navigate('ShowBookScreen', { isbn : isbn });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search by ISBN or book name"
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.isbn}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bookContainer}
            onPress={() => handleBookPress(item.isbn)}
          >
            <Text style={styles.bookName}>{item.bookName}</Text>
            <Text style={styles.isbn}>{item.isbn}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:44
  },
  searchInput: {
    height: 40,
    borderColor: '#35155D',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#40128B',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  bookContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    elevation: 3,
  },
  bookName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  isbn: {
    color: 'gray',
  },
});

export default ShowAdminScreen;
