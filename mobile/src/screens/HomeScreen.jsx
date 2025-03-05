import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import ProductCard from "../components/Card/ProductCard";
import SliderMain from "../components/Slider/SliderMain";

const HomeScreen = () => {
  const products = useSelector((state) => state.product.products);

  // Take last 3 products
  const lastProducts = [...products]
    .sort((a, b) => new Date(b.date_time) - new Date(a.date_time))
    .slice(0, 3);

  return (
    <View style={styles.container}>
      <Toast position="top" />

      {/* Slider */}
      <SliderMain />

      {/* Last 3 product */}
      <Text style={styles.title}>Last Products</Text>
      <FlatList
        data={lastProducts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <ProductCard data={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Lucida Handwriting",
  },
  cardContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 8,
    width: "100%",
  },
});

export default HomeScreen;