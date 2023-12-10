import React from 'react';
import { View, Image, Button } from 'react-native';

const QRCode = ({ code, onDownload }) => {
  return (
    <View>
      <Image source={{ uri: code }} style={{ height: 200, width: 200 }} />
      <Button title="Download QR Code" onPress={onDownload} />
    </View>
  );
};

export default QRCode;
