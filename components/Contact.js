import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; //importing vector icons from expo
import Card from './Card'; //importing reusable card component

//Contact Page
export default Contact = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Contact Us</Text>

    {/* Phone Card */}
    <Card>
      <View style={styles.cardContent}>
        <FontAwesome name='phone' size={30} color='#000' />
        <Text style={styles.text}>+91-6211-333</Text>
      </View>
      <MaterialIcons name='keyboard-arrow-right' size={30} color='#999' />
    </Card>

    {/* Email Card */}
    <Card>
      <View style={styles.cardContent}>
        <MaterialIcons name='email' size={30} color='#000' />
        <Text style={styles.text}>xyz@gmail.com</Text>
      </View>
      <MaterialIcons name='keyboard-arrow-right' size={30} color='#999' />
    </Card>

    {/* Whatsapp Card */}
    <Card>
      <View style={styles.cardContent}>
        <FontAwesome name='whatsapp' size={30} color='#000' />
        <Text style={styles.text}>Chat with us</Text>
      </View>
      <MaterialIcons name='keyboard-arrow-right' size={30} color='#999' />
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'work-sans',
    margin: 30,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'work-sans',
    marginHorizontal: 20,
  },
});
