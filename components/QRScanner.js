import React from 'react';
import { View } from 'react-native';
import QRScanner from '../components/QRScanner';

const QRScannerScreen = ({ navigation }) => {
  const handleScan = (scannedData) => {
    console.log('Scanned Data:', scannedData);
    navigation.navigate('ShowBook', { book: { /* book details based on scanned data */ } });
  };

  return (
    <View>
      <QRScanner onScan={handleScan} />
    </View>
  );
};

export default QRScannerScreen;