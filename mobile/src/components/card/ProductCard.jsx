import React from "react";
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BsBasket3Fill } from "react-icons/bs";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = async (product) => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      dispatch(addToCart(product));
      Alert.alert("Success", "Product added successfully!");
    } else {
      Alert.alert("Error", "Please, login first.");
    }
  };

  return (
    <View style={styles.card}>
      {/* Ürün Görseli */}
      <Image source={{ uri: data.image }} style={styles.image} />

      {/* Ürün İçeriği */}
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>

        {/* Fiyat ve Sepet */}
        <View style={styles.footer}>
          <Text style={styles.price}>{data.price},00₺</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(data)}>
            <BsBasket3Fill color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#e91e63",
    padding: 10,
    borderRadius: 50,
  },
});

export default ProductCard;