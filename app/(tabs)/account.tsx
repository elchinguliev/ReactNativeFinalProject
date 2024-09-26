import { View, Text ,TextInput, StyleSheet, TouchableOpacity, Image,Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';


const Account = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Keys for AsyncStorage
  const CARD_NUMBER_KEY = '@card_number';
  const CARD_NAME_KEY = '@card_name';
  const EXPIRY_DATE_KEY = '@expiry_date';
  const CVV_KEY = '@cvv';

  // Load saved card details from AsyncStorage
  useEffect(() => {
    const loadCardData = async () => {
      try {
        const savedCardNumber = await AsyncStorage.getItem(CARD_NUMBER_KEY);
        const savedCardName = await AsyncStorage.getItem(CARD_NAME_KEY);
        const savedExpiryDate = await AsyncStorage.getItem(EXPIRY_DATE_KEY);
        const savedCvv = await AsyncStorage.getItem(CVV_KEY);

        const [city, setCity] = useState('');
        const [country, setCountry] = useState('');
        const [street, setStreet] = useState('');

        if (savedCardNumber) setCardNumber(savedCardNumber);
        if (savedCardName) setCardName(savedCardName);
        if (savedExpiryDate) setExpiryDate(savedExpiryDate);
        if (savedCvv) setCvv(savedCvv);
      } catch (error) {
        console.error('Failed to load card details from storage:', error);
      }
    };

    loadCardData();
  }, []);

  // Save card details to AsyncStorage
  const saveCardData = async () => {
    try {
      await AsyncStorage.setItem(CARD_NUMBER_KEY, cardNumber);
      await AsyncStorage.setItem(CARD_NAME_KEY, cardName);
      await AsyncStorage.setItem(EXPIRY_DATE_KEY, expiryDate);
      await AsyncStorage.setItem(CVV_KEY, cvv);
      const CITY_KEY = '@city';
      const COUNTRY_KEY = '@country';
      const STREET_KEY = '@street';
      Alert.alert('Success', 'Card details have been saved!');
    } catch (error) {
      console.error('Failed to save card details:', error);
      Alert.alert('Error', 'Failed to save card details. Please try again.');
    }
  };

  const handleCardNumberChange = (text: string) => setCardNumber(text);

  const handleCardNameChange = (text: string) => setCardName(text);

  const handleExpiryDateChange = (text: string) => setExpiryDate(text);

  const handleCvvChange = (text: string) => setCvv(text);

  return (
    <View style={styles.container}>
      {/* Credit/Debit Card Section */}
      <LinearGradient
        colors={['#A770EF', '#FDB99B']}
        style={styles.cardContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.cardDetails}>
          <Text style={styles.cardNumber}>{cardNumber || '**** **** **** ****'}</Text>
          <Text style={styles.cardName}>{cardName ? cardName.toUpperCase() : 'NAME ON CARD'}</Text>
          <Text style={styles.expiryDate}>{expiryDate || 'MM/YY'}</Text>
        </View>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg' }}
          style={styles.cardLogo}
        />
      </LinearGradient>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name on card"
        value={cardName}
        onChangeText={handleCardNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Card number"
        value={cardNumber}
        onChangeText={handleCardNumberChange}
        keyboardType="numeric"
        maxLength={19} // To limit the length of card number
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputSmall]}
          placeholder="Expiry date"
          value={expiryDate}
          onChangeText={handleExpiryDateChange}
          keyboardType="numeric"
          maxLength={5} // Limit for MM/YY format
        />
        <TextInput
          style={[styles.input, styles.inputSmall]}
          placeholder="CVC"
          value={cvv}
          onChangeText={handleCvvChange}
          keyboardType="numeric"
          maxLength={3}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={saveCardData}>
        <Text style={styles.buttonText}>SAVE THIS CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  cardContainer: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    height: 200,
    justifyContent: 'space-between',
  },
  cardDetails: {
    flex: 1,
  },
  cardNumber: {
    fontSize: 22,
    color: '#fff',
    letterSpacing: 2,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  expiryDate: {
    fontSize: 16,
    color: '#fff',
  },
  cardLogo: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputSmall: {
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#00C853',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Account;