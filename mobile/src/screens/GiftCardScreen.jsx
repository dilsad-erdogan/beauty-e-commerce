import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';

const GiftCardScreen = () => {
  const [amount, setAmount] = useState(25);
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleBuyNow = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter a recipient email!');
      return;
    }

    try {
      await axios.post('http://localhost:5000/send-gift-card', { email, amount, quantity });
      toast.show(`Gift card sent successfully to ${email}`, { type: 'success' });
    } catch (error) {
      console.error('Error sending email:', error);
      Alert.alert('Error', 'Failed to send the gift card.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://static.wixstatic.com/media/f15cd7453d09866e4a418b65c8558bf5.png' }}
          style={styles.image}
        />
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Gift Card</Text>
        <Text style={styles.subtitle}>Choose an amount and write a personalized message.</Text>

        {/* Amount Selection */}
        <View style={styles.selectionContainer}>
          <Text style={styles.selectionTitle}>Amount</Text>
          <View style={styles.amountButtons}>
            {[25, 50, 100, 150, 200].map((amt) => (
              <TouchableOpacity
                key={amt}
                style={[styles.amountButton, amount === amt ? styles.selectedButton : {}]}
                onPress={() => setAmount(amt)}
              >
                <Text style={styles.amountText}>${amt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quantity Selection */}
        <View style={styles.selectionContainer}>
          <Text style={styles.selectionTitle}>Quantity</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              style={styles.quantityButton}
            >
              <Feather name="minus" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
              <Feather name="plus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Input Fields */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Recipient email *"
          style={styles.input}
        />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Message (Optional)"
          style={[styles.input, styles.textArea]}
          multiline
        />

        <TouchableOpacity onPress={handleBuyNow} style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Lucida Handwriting',
  },
  subtitle: {
    marginTop: 8,
    color: '#636363',
  },
  selectionContainer: {
    marginTop: 16,
  },
  selectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  amountButtons: {
    flexDirection: 'row',
    marginTop: 8,
  },
  amountButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
  },
  selectedButton: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  amountText: {
    color: '#000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buyButton: {
    marginTop: 24,
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GiftCardScreen;