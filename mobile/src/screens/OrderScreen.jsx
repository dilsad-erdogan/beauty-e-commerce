import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
import { PiEmptyBold } from 'react-icons/pi';
import orderServices from '../../../api/services/order';
import { dropCart } from '../redux/cartSlice';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [id, setId] = useState('');
  const [shippingInfo, setShippingInfo] = useState({ address: '', city: '', zip: '' });
  const cart = useSelector(state => state.cart);
  const toast = useToast();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('user'))?.uid;
    setId(id);
  }, []);

  const handleOrder = async () => {
    try {
      const order = {
        user_id: id,
        products: cart.products.map(product => ({
          product: product._id,
          quantity: product.quantity
        })),
        address: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.zip}`,
        totalPrice: cart.totalPrice,
        deliveryStatus: false
      };

      await orderServices.add(order);
      toast.show('Your order has been received!', { type: 'success' });
      navigation.navigate('Home'); // Navigate to Home screen after order
      dispatch(dropCart());
    } catch (error) {
      toast.show(error.message, { type: 'danger' });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {cart.products.length > 0 ? (
          <View style={styles.checkoutContainer}>
            <Text style={styles.checkoutTitle}>CHECKOUT</Text>

            {/* Shipping Information */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Shipping Information</Text>
                <TouchableOpacity onPress={() => setShippingToggle(!shippingToggle)}>
                  <Feather name={shippingToggle ? 'chevron-down' : 'chevron-up'} size={20} />
                </TouchableOpacity>
              </View>

              {shippingToggle && (
                <View style={styles.inputGroup}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Address"
                    onChangeText={address => setShippingInfo({ ...shippingInfo, address })}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter City"
                    onChangeText={city => setShippingInfo({ ...shippingInfo, city })}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Zip Code"
                    onChangeText={zip => setShippingInfo({ ...shippingInfo, zip })}
                  />
                </View>
              )}
            </View>

            {/* Payment Method */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Payment Method</Text>
                <TouchableOpacity onPress={() => setPaymentToggle(!paymentToggle)}>
                  <Feather name={paymentToggle ? 'chevron-down' : 'chevron-up'} size={20} />
                </TouchableOpacity>
              </View>

              {paymentToggle && (
                <View style={styles.inputGroup}>
                  <View style={styles.radioGroup}>
                    <TouchableOpacity onPress={() => setPaymentMethod('cod')}>
                      <Text style={styles.radioText}>Cash on Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPaymentMethod('dc')}>
                      <Text style={styles.radioText}>Debit Card</Text>
                    </TouchableOpacity>
                  </View>

                  {paymentMethod === 'dc' && (
                    <View style={styles.cardInfo}>
                      <TextInput style={styles.input} placeholder="Card Number" />
                      <TextInput style={styles.input} placeholder="Card Holder Name" />
                      <View style={styles.cardExpiryGroup}>
                        <TextInput style={styles.input} placeholder="Expire Date (MM/YY)" />
                        <TextInput style={styles.input} placeholder="CVV" />
                      </View>
                    </View>
                  )}
                </View>
              )}
            </View>

            {/* Order Summary */}
            <View style={styles.orderSummary}>
              <Text style={styles.orderSummaryTitle}>Order Summary</Text>
              {cart.products.map(product => (
                <View key={product._id} style={styles.productItem}>
                  <Image source={{ uri: product.image }} style={styles.productImage} />
                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productDetails}>
                      ${product.price} x {product.quantity}
                    </Text>
                  </View>
                  <Text style={styles.productTotal}>
                    ${(product.price * product.quantity).toFixed(2)}
                  </Text>
                </View>
              ))}
              <View style={styles.totalPrice}>
                <Text>Total Price:</Text>
                <Text style={styles.totalPriceAmount}>${cart.totalPrice.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.placeOrderButton} onPress={handleOrder}>
                <Text style={styles.placeOrderButtonText}>Place Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.emptyCart}>
            <PiEmptyBold style={styles.emptyCartIcon} />
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
            <Text style={styles.emptyCartSubText}>Add something to make me happy :)</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
  checkoutContainer: {
    marginTop: 40,
  },
  checkoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Lucida Handwriting',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  inputGroup: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  radioGroup: {
    marginBottom: 10,
  },
  radioText: {
    fontSize: 16,
    fontWeight: '500',
  },
  cardInfo: {
    marginTop: 10,
  },
  cardExpiryGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderSummary: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 8,
  },
  orderSummaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  productDetails: {
    color: '#888',
  },
  productTotal: {
    fontWeight: '600',
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  totalPriceAmount: {
    fontWeight: '600',
  },
  placeOrderButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  emptyCart: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 40,
  },
  emptyCartIcon: {
    fontSize: 96,
    color: '#E91E63',
  },
  emptyCartText: {
    fontSize: 24,
    color: '#E91E63',
    fontWeight: '600',
  },
  emptyCartSubText: {
    color: '#888',
    fontWeight: '500',
  },
});

export default OrderScreen;