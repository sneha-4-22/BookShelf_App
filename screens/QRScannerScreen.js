import React from 'react';
import { View, Text, Button } from 'react-native';

const QRScanner = ({ onScan }) => {
  const handleScan = () => {
    
    const scannedData = 'Scanned QR Code Data';
    onScan(scannedData);
  };

  return (
    <View>
      <Text>QR Scanner Screen</Text>
      <Button title="Scan QR Code" onPress={handleScan} />
    </View>
  );
};

export default QRScanner;