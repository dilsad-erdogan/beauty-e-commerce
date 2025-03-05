import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from "react-native";

const ContactUs = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        Alert.alert("Success", "Your message has been sent!");
    };

    return (
        <SafeAreaView className="flex-1 bg-white p-6">
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="text-center text-xl font-bold mb-4">Contact Us</Text>

                <View className="mb-4">
                    <Text className="text-gray-600 font-semibold">First Name</Text>
                    <TextInput
                        className="border p-2 rounded bg-gray-100"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>

                <View className="mb-4">
                    <Text className="text-gray-600 font-semibold">Last Name</Text>
                    <TextInput
                        className="border p-2 rounded bg-gray-100"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </View>

                <View className="mb-4">
                    <Text className="text-gray-600 font-semibold">Email</Text>
                    <TextInput
                        className="border p-2 rounded bg-gray-100"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View className="mb-4">
                    <Text className="text-gray-600 font-semibold">Subject</Text>
                    <TextInput
                        className="border p-2 rounded bg-gray-100"
                        value={subject}
                        onChangeText={setSubject}
                    />
                </View>

                <View className="mb-6">
                    <Text className="text-gray-600 font-semibold">Message</Text>
                    <TextInput
                        className="border p-2 rounded bg-gray-100 h-24"
                        multiline
                        value={message}
                        onChangeText={setMessage}
                    />
                </View>

                <TouchableOpacity className="bg-pink-500 p-3 rounded-full" onPress={handleSubmit}>
                    <Text className="text-white text-center font-semibold">Send Message</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ContactUs;