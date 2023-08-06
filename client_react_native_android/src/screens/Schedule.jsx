import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeCleaning from '../../assets/home_clean.png';


const ShowDetails = ({ text, value }) => (
  <View style={{ backgroundColor: '#3d3d3d', padding: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 15, width: '70%', margin: 10 }}>
    <Text style={{ color: 'white', fontSize: 20 }}>{text}
    </Text>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>{value}</Text>
  </View>
)

const ListItem = ({ }) => (
  <View style={{borderColor:'#5c5c5c',borderWidth:1,borderRadius:15, padding:10,marginTop:5}}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

      <Image source={HomeCleaning} style={{ width: 60, height: 60 }} />
      <View style={{marginLeft:10}}>
        <Text style={styles.h2text}>{'Home Cleaning'}</Text>
        <Text style={styles.regulartext}>{'Main Lobby'}</Text>
      </View>

      <View style={{backgroundColor:'#009c24',padding:4,borderRadius:15,position:'absolute',bottom:5,right:10}}>
          <Text style={{color:'white',fontWeight:'300'}}>Completed</Text>
      </View>

    </View>
  </View>
)

const HomeScreen = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ alignItems: 'center', padding: 10 }}>
        <ShowDetails text={'Task Completed per week'} value={34} />
        <ShowDetails text={'Total Duration Week'} value={`${46} hours`} />
      </View>

      <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 15, borderTopLeftRadius: 15, padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.boldtext}>Completed Tasks</Text>
          <TouchableOpacity style={{ flexDirection: 'row', color: 'black', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={{ color: 'black' }}>View All</Text>
            <Icon name='arrow-right-alt' size={20} color={'#000'} />
          </TouchableOpacity>
        </View>

        {  /*Completed Task List*/}
      <ScrollView>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boldtext: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  h1text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }, h2text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  h3text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  }, h5text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  }, h6text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  }, regulartext: {
    fontSize: 15,

    color: 'black',
  }
  , shadowProp: {
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 1,

  },
})


export default HomeScreen;
