import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
export default function App() {
  return (

    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text1}>O U R  S T O R Y</Text>
      <Image style={styles.picture} source={require('../my-app/assets/pictures/Logo.png')}/>
            <Icon name='menu' size={30} style={styles.icon1} />
            <FontAwesome name='search' size={25} style={styles.icon2} />
            <FontAwesome name='shopping-bag' size={25} style={styles.icon3} />
            <Icon name='filter' size={30} style={styles.icon5}  color={'orange'}/>
            <FontAwesome name='list' size={25} style={styles.icon4} />
          
          
          <View style={styles.imageRow}>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress1.png')}/>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress2.png')}/>
          </View>

          <View style={styles.imageRow}>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress3.png')}/>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress4.png')}/>
          </View>

          <View style={styles.imageRow}>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress5.png')}/>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress6.png')}/>
          </View>

          <View style={styles.imageRow}>
          <Image style={styles.picturePair} source={require('../my-app/assets/pictures/dress7.png')}/>
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
  picture1: {
    position:"absolute",
    top: '-70%',
    left: '-45%',
  },
  icon1: {
    position:"absolute",
    position:"absolute",
    left: '10%',
    top: '10%',
  },
  icon2: {
    position:"absolute",
    right: '20%',
    top: '10%',
  },
  icon3: {
    position:"absolute",
  right: '5%',
    top: "10%",
  },
  text1: {
    position:"absolute",
    fontSize: 25,
    fontWeight: 'bold',
    top: '20%',
    left: '5%',
  },
  icon4: {
    position:"absolute",
    top:'20%',
    right: '22%',
  },
  icon5: {
    position:"absolute",
    top:'19.5%',
    right: '3%',
  },
  imageContainer:{
    flexDirection:'column',
    alignitems: 'center',
    justifyContent: 'center',
    marginTop: '30%'
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
    marginHorizontal:10,

  }
});
