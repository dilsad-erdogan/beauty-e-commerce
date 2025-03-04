import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { get as getProduct } from "../../../../api/services/product.js";
import { get as getCategory } from "../../../../api/services/categorie.js";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CartSidebar from "./CartSidebar";
import { useDispatch } from "react-redux";
import { setProducts, setSearchTerm } from "../../redux/slices/productSlice";
import { setCategories } from "../../redux/slices/categorySlice";

const Navbar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const handleSearch = () => {
    dispatch(setSearchTerm(search));
    navigation.navigate("Search", { query: search });
  };

  useEffect(() => {
      dispatch(setProducts(product));
      dispatch(setCategories(category));
  }, [product, category]);

  useEffect(() => {
    const fetchPro = async () => {
      try {
        const data = await getProduct();
        setProduct(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchCat = async () => {
      try {
        const data = await getCategory();
        setCategory(data.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchPro();
    fetchCat();
  }, []);

  return (
    <View style={styles.navbar}>
      {/* Üst Logo ve Menü */}
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.logo}>NUDE</Text>
        </TouchableOpacity>
        
        {/* Menü Aç/Kapa */}
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
      </View>

      {/* Arama Kutusu */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
        />
      </View>

      {/* Açılır Menü */}
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
            <Text style={styles.menuItem}>SHOP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Services")}>
            <Text style={styles.menuItem}>SERVICES</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("GiftCard")}>
            <Text style={styles.menuItem}>GIFT CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.menuItem}>CONTACT</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Kullanıcı & Sepet */}
      <View style={styles.bottomContainer}>
        <FontAwesome name="user-circle" size={28} color="black" />
        <CartSidebar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "white",
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Lucida Handwriting",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  menu: {
    marginTop: 10,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 15,
  },
});

export default Navbar;