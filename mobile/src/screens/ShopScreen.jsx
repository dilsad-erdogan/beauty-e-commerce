import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Button, TextInput, Slider } from "react-native";
import { useSelector } from "react-redux";
import ProductCard from "../components/Card/ProductCard";
import { useToast } from "react-native-toast-notifications";

const ShopScreen = () => {
  const toast = useToast();
  const products = useSelector((state) => state.product.products);
  const categories = useSelector((state) => state.category.categories);

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState([10, 200]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" || product.cat_id === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <ScrollView style={styles.container}>
      {/* Sidebar - Filters */}
      <View style={styles.sidebar}>
        <Text style={styles.sectionTitle}>Browse by</Text>
        <View style={styles.categoryList}>
          <Button
            title="All Products"
            onPress={() => setSelectedCategory("All Products")}
            color={selectedCategory === "All Products" ? "black" : "#888"}
          />
          {categories.map((category) => (
            <Button
              key={category._id}
              title={category.name}
              onPress={() => setSelectedCategory(category._id)}
              color={selectedCategory === category._id ? "black" : "#888"}
            />
          ))}
        </View>

        {/* Price Filter */}
        <Text style={styles.sectionTitle}>Filter by</Text>
        <Text style={styles.filterLabel}>Price</Text>
        <Slider
          minimumValue={10}
          maximumValue={200}
          step={1}
          value={priceRange[1]}
          onValueChange={(value) => setPriceRange([priceRange[0], value])}
          style={styles.slider}
        />
        <Text style={styles.priceRange}>
          ${priceRange[0]} - ${priceRange[1]}
        </Text>
      </View>

      {/* Products Grid */}
      <View style={styles.productsGrid}>
        <Text style={styles.title}>All Products</Text>
        <Text style={styles.productCount}>{filteredProducts.length} products</Text>

        <View style={styles.productList}>
          {filteredProducts.map((product) => (
            <View key={product._id} style={styles.productCard}>
              <ProductCard data={product} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sidebar: {
    padding: 16,
    backgroundColor: "#f7f7f7",
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryList: {
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 14,
    color: "#333",
    marginVertical: 8,
  },
  slider: {
    width: "100%",
    marginBottom: 8,
  },
  priceRange: {
    fontSize: 14,
    color: "#333",
  },
  productsGrid: {
    padding: 16,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productCount: {
    fontSize: 16,
    marginBottom: 16,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    marginBottom: 16,
  },
});

export default ShopScreen;