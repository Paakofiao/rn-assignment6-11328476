import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>O U R  S T O R Y</Text>
      <Image style={styles.picture} source={require('../my-app/assets/pictures/Logo.png')}/>
            <Icon name='menu' size={30} style={styles.icon1} />
            <FontAwesome name='search' size={25} style={styles.icon2} />
            <FontAwesome name='shopping-bag' size={25} style={styles.icon3} />
            <Icon name='filter' size={30} style={styles.icon5}  color={'orange'}/>
            <FontAwesome name='list' size={25} style={styles.icon4} />

      <StatusBar style="auto" />
    </View>
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
    top: -330,
    
  },
  picture1: {
    color: 'black',
    top:200
  },
  icon1: {
    left: -150,
    top:-350,
  },
  icon2: {
    right: -130,
    top: -385,
  },
  icon3: {
  right: -180,
    top: -411,
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    top: -210,
    left: -75,
  },
  icon4: {
    top:-380,
    right: -120,
  },
  icon5: {
    top:-353,
    right: -190,
   
  }
});
