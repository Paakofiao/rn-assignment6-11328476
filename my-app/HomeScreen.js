import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation(); // Hook to use navigation

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text1}>O U R  S T O R Y</Text>
        <Image style={styles.picture} source={require('../my-app/assets/pictures/Logo.png')} />
        <Icon name='menu' size={30} style={styles.icon1} />
        <FontAwesome name='search' size={25} style={styles.icon2} />
        <TouchableOpacity style={styles.icon3} onPress={() => navigation.navigate('Cart')}><FontAwesome name='shopping-bag' size={25}  /></TouchableOpacity>
        <Icon name='filter' size={30} style={styles.icon5} color={'orange'} />
        <FontAwesome name='list' size={25} style={styles.icon4} />

        <View style={styles.imageRow}>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress1.png')} />
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress2.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialIcons name='add-circle' size={25} style={styles.iconOnImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialIcons name='add-circle' size={25} style={styles.iconOnImage1} />
          </TouchableOpacity>
        </View>

        <View style={styles.imageRow}>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress3.png')} />
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress4.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialIcons name='add-circle' size={25} style={styles.iconOnImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialIcons name='add-circle' size={25} style={styles.iconOnImage1} />
          </TouchableOpacity>
        </View>

        <View style={styles.imageRow}>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress5.png')} />
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress6.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialIcons name='add-circle' size={25} style={styles.iconOnImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialIcons name='add-circle' size={25} style={styles.iconOnImage1} />
          </TouchableOpacity>
        </View>

        <View style={styles.imageRow}>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress7.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialIcons name='add-circle' size={25} style={styles.iconOnImage} />
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    position: "absolute",
    top: '10%',
  },
  icon1: {
    position: "absolute",
    left: '10%',
    top: '10%',
  },
  icon2: {
    position: "absolute",
    right: '20%',
    top: '10%',
  },
  icon3: {
    position: "absolute",
    right: '5%',
    top: "10%",
  },
  text1: {
    position: "absolute",
    fontSize: 25,
    fontWeight: 'bold',
    top: '20%',
    left: '5%',
  },
  icon4: {
    position: "absolute",
    top: '20%',
    right: '22%',
  },
  icon5: {
    position: "absolute",
    top: '19.5%',
    right: '3%',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 70,
    top: '70%'
  },
  picturePair: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
  },
  iconOnImage: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'black',
  },
  iconOnImage1: {
    position: 'absolute',
    top: 10,
    right: 180,
    color: 'black',
  },
});
