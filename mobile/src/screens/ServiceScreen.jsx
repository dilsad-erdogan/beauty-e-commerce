import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ServiceCard from '../components/Card/ServiceCard';
import serviceServices from '../../../api/services/service';
import { setServices } from '../redux/serviceSlice';
import { useToast } from 'react-native-toast-notifications';

const ServiceScreen = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [service, setService] = useState([]);
  const services = useSelector((state) => state.service.services);

  useEffect(() => {
    dispatch(setServices(service));
  }, [service]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await serviceServices.get();
        setService(data.data || []);
      } catch (error) {
        toast.show("Error fetching service: " + error.message, {
          type: "danger",
        });
      }
    };

    fetchService();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Our Services</Text>

        <View style={styles.serviceGrid}>
          {services.map((service) => (
            <View key={service._id} style={styles.serviceCard}>
              <ServiceCard data={service} />
            </View>
          ))}
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Lucida Handwriting',
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
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
});

export default ServiceScreen;