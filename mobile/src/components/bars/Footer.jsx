import React from "react";
import { View, Text, TextInput, TouchableOpacity, Linking, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footer}>
            {/* Newsletter Section */}
            <View style={styles.newsletterContainer}>
                <Text style={styles.newsletterTitle}>Join Our Newsletter *</Text>
                <View style={styles.checkboxContainer}>
                    <TextInput style={styles.checkbox} />
                    <Text>Yes, subscribe me to your newsletter. *</Text>
                </View>
                <TouchableOpacity style={styles.subscribeButton}>
                    <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
                </TouchableOpacity>
            </View>

            {/* Links Section */}
            <View style={styles.linksContainer}>
                <View>
                    <Text style={styles.link} onPress={() => Linking.openURL("#")}>Shop</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL("#")}>Services</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL("#")}>Gift Card</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL("#")}>Contact</Text>
                </View>
                <View>
                    <Text style={styles.link} onPress={() => Linking.openURL("#")}>Youtube</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL("#")}>Instagram</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL("#")}>X</Text>
                </View>
            </View>

            {/* Copyright Section */}
            <Text style={styles.copyright}>
                © 2025 by Dilşad Rukiye Erdoğan. 
                <Text style={styles.linkedin} onPress={() => Linking.openURL("https://www.linkedin.com/in/dilşad-erdoğan-089547221/")}>Linkedin</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        backgroundColor: "#fff",
    },
    newsletterContainer: {
        marginBottom: 20,
    },
    newsletterTitle: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Lucida Handwriting",
        textTransform: "uppercase",
        marginBottom: 8,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "#666",
        marginRight: 8,
    },
    subscribeButton: {
        backgroundColor: "#ec4899",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: "flex-start",
    },
    subscribeButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    linksContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    link: {
        color: "#000",
        marginBottom: 6,
    },
    copyright: {
        textAlign: "center",
        color: "#666",
        fontSize: 12,
    },
    linkedin: {
        color: "#ec4899",
        textDecorationLine: "underline",
    },
});

export default Footer;