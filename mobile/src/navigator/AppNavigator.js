import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, View, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import Navbar from "../components/bars/Navbar";
import Footer from "../components/bars/Footer";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* Navbar */}
        <View style={styles.navbarContainer}>
          <Navbar />
        </View>

        {/* Page Content */}
        <View style={styles.contentContainer}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarContainer: {
    position: "absolute", 
    top: 50, 
    left: 0,
    right: 0,
    zIndex: 100,
  },
  contentContainer: {
    flex: 1,
    marginTop: 80,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default AppNavigator;