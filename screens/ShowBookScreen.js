import React from 'react';
import { View, Text } from 'react-native';
import QRCode from '../components/QRCode';

const ShowBookScreen = ({ route }) => {
  const { book } = route.params;

  const handleDownloadQRCode = () => {
    // Implement logic to download QR code
  };

  return (
    <View>
      <Text>Book Details</Text>
      <Text>{book.bookName}</Text>
      <Text>{book.isbn}</Text>
      {/* Add other book details */}
      <QRCode code="GeneratedQRCodeData" onDownload={handleDownloadQRCode} />
    </View>
  );
};

export default ShowBookScreen;
