// BookForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BookForm = ({ onSubmit }) => {
  const [bookName, setBookName] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = () => {
    const bookDetails = {
      bookName,
      isbn,
    };

    onSubmit(bookDetails);
  };

  return (
    <View style={styles.formContainer}>
      <Text>Book Name</Text>
      <TextInput style={styles.input} value={bookName} onChangeText={setBookName} />
      <Text>ISBN</Text>
      <TextInput style={styles.input} value={isbn} onChangeText={setIsbn} />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  submitButton: {
    backgroundColor: '#40128B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default BookForm;
