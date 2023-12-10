import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import * as Sharing from 'expo-sharing';
import { FileSystem } from 'expo-file-system';

const ShowBookScreen = ({ route }) => {
  const { isbn } = route.params;
  const [bookDetails, setBookDetails] = useState(null);
  const [qrCodeImageUri, setQRCodeImageUri] = useState({ uri: '' });

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch('https://sneha-4-22.github.io/BOOKSTORE/books.json');
        const data = await response.json();
        const details = data.find((book) => book.isbn === isbn);
        setBookDetails(details);

        setQRCodeImageUri(details?.isbn || '');
      } catch (error) {
        console.error('Error fetching book details:', error.message);
        setBookDetails(null);
        setQRCodeImageUri('');
      }
    };

    fetchBookDetails();
  }, [isbn]);

  const generateQRCodeImage = async (data) => {
    try {
      const qrCodeImageData = 'GeneratedQRCodeImageData';
      const qrCodeImageUri = `${FileSystem.cacheDirectory}qr_code.png`;

      await FileSystem.writeAsStringAsync(qrCodeImageUri, qrCodeImageData, {
        encoding: FileSystem.EncodingType.Base64,
      });

      setQRCodeImageUri({ uri: qrCodeImageUri });
    } catch (error) {
      console.error('Error generating QR code image:', error.message);
      setQRCodeImageUri({ uri: '' });
    }
  };

  const handleDownloadQRCode = async () => {
    try {
      if (qrCodeImageUri && qrCodeImageUri.uri) {
        await Sharing.shareAsync(qrCodeImageUri.uri);
      } else {
        console.error('QR code image URI is null or undefined.');
      }
    } catch (error) {
      console.error('Error sharing QR code:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.heading}>Book Details</Text>
        <Text style={styles.label}>Book Name:</Text>
        <Text style={styles.text}>{bookDetails?.bookName}</Text>
        <Text style={styles.label}>ISBN:</Text>
        <Text style={styles.text}>{bookDetails?.isbn}</Text>
      </View>
      <View style={styles.qrCodeContainer}>
        {qrCodeImageUri?.uri ? (
          <QRCode
            value={qrCodeImageUri?.uri}
            size={200}
            backgroundColor="white"
            color="#40128B"
          />
        ) : (
          <Text>No QR code available</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#DFCCFB',
    marginTop: 44,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: '#BEADFA',
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  qrCodeContainer: {
    alignItems: 'center',
  },
});

export default ShowBookScreen;
