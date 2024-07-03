import React, {useContext} from 'react';
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native';
import { CartContext } from './CartContext';

export default function Cart() {
const {cartItems} = useContext(CartContext);
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <Image key={index} style={styles.cartImage} source={item.image} />
        ))
      ) : (
        <Text style={styles.text}></Text>
      )}
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
  title: {
    top:'40%',
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});
