import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

const SliderMain = () => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const slides = [
    "https://static.wixstatic.com/media/84770f_44e3162df7dc4eb69d6d3f848b26416d~mv2.jpg/v1/fill/w_1075,h_580,q_90,enc_avif,quality_auto/84770f_44e3162df7dc4eb69d6d3f848b26416d~mv2.jpg",
    "https://static.wixstatic.com/media/84770f_b1e324e5195449fba23df0d9f889767d~mv2.jpg/v1/fill/w_1075,h_580,q_90,enc_avif,quality_auto/84770f_b1e324e5195449fba23df0d9f889767d~mv2.jpg",
  ];

  return (
    <View style={styles.container}>
      {/* Text and button */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Nude Store</Text>
        <Text style={styles.subtitle}>Discover our latest products and trends.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Shop") }>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      {/* Slider */}
      <Carousel
        loop
        autoPlay
        autoPlayInterval={3000}
        width={width}
        height={200}
        data={slides}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginVertical: 5,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default SliderMain;