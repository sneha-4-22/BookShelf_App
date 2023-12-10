import React from 'react';
import { View, Text } from 'react-native';
import QRScanner from '../components/QRScanner';

const QRScannerScreen = ({ navigation }) => {
  const handleScan = (scannedData) => {
    // Implement logic to handle the scanned data
    console.log('Scanned Data:', scannedData);
    // Redirect to the individual book page
    navigation.navigate('ShowBook', { book: { /* book details based on scanned data */ } });
  };

  return (
    <View>
      <QRScanner onScan={handleScan} />
    </View>
  );
};

export default QRScannerScreen;
