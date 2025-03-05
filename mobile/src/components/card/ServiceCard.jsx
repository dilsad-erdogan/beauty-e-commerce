import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ServiceCard = ({ data }) => {
  return (
    <View style={styles.card}>
      {/* Service pic */}
      <Image source={{ uri: data.image }} style={styles.image} />

      {/* Service content */}
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.time}>{data.time} hours</Text>
        <Text style={styles.price}>{data.price},00₺</Text>
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
  time: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ServiceCard;