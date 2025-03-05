import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { PiEmptyBold } from 'react-icons/pi';
import ProductCard from '../components/Card/ProductCard';

const SearchScreen = () => {
  const filterProducts = useSelector(state => state.product.filteredData);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {filterProducts.length > 0 ? (
          <View style={styles.productList}>
            <Text style={styles.title}>Products</Text>
            <View style={styles.productGrid}>
              {filterProducts.map((product) => (
                <View key={product._id} style={styles.productCard}>
                  <ProductCard data={product} />
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <PiEmptyBold style={styles.emptyIcon} />
            <Text style={styles.emptyText}>No product found</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  productList: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Lucida Handwriting',
    marginBottom: 20,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginBottom: 20,
    width: '48%',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 10,
  },
  emptyIcon: {
    fontSize: 96,
    color: '#E91E63',
  },
  emptyText: {
    fontSize: 20,
    color: '#E91E63',
    fontWeight: '600',
  },
});

export default SearchScreen;