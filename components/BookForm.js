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
      <Text style={styles.label}>Book Name</Text>
      <TextInput style={styles.input} value={bookName} onChangeText={setBookName} />
      <Text style={styles.label}>ISBN</Text>
      <TextInput style={styles.input} value={isbn} onChangeText={setIsbn} />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 46,
    marginBottom: 18,
  },
  input: {
    height: 40,
    borderColor: '#35155D',
    borderWidth: 1,
    marginBottom: 8,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black', 
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
