import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { increaseQuantity, decreaseQuantity, removeFromCart, dropCart } from "../../redux/cartSlice";
import { FaShoppingBasket } from "react-icons/fa";
import { X } from "lucide-react";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
    
  const cartItems = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <View>
      {/* Basket Icon */}
      <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.basketButton}>
        <FaShoppingBasket size={24} />
        {cartItems.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItems.length}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Cart Modal */}
      <Modal visible={isOpen} animationType="slide">
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Cart ({cartItems.length} items)</Text>
            <TouchableOpacity onPress={() => setIsOpen(false)}>
              <X size={24} />
            </TouchableOpacity>
          </View>

          {/* Cart Items */}
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item._id))} style={styles.quantityButton}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => dispatch(increaseQuantity(item._id))} style={styles.quantityButton}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={() => dispatch(removeFromCart(item._id))}>
                  <Text style={styles.removeText}>X</Text>
                </TouchableOpacity>
              </View>
            )}
            ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
          />

          {/* Total and Buttons */}
          {cartItems.length > 0 && (
            <View style={styles.footer}>
              <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalAmount}>${totalPrice.toFixed(2)}</Text>
              </View>
              <TouchableOpacity onPress={() => dispatch(dropCart())} style={styles.clearButton}>
                <Text style={styles.buttonText}>Clear Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.orderButton} onPress={() => navigation.navigate('Order')}>
                <Text style={styles.buttonText}>Complete Order</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  basketButton: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 12,
    color: "gray",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  removeText: {
    color: "red",
  },
  emptyText: {
    textAlign: "center",
    color: "gray",
    marginTop: 20,
  },
  footer: {
    borderTopWidth: 1,
    paddingTop: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  clearButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CartSidebar;