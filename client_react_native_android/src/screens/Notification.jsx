import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,

  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeCleaning from '../../assets/home_clean.png';

const ShowDetails = ({ text, value }) => (
  <View
    style={{
      backgroundColor: '#3d3d3d',
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      width: '70%',
      margin: 10,
    }}>
    <Text style={{ color: 'white', fontSize: 20 }}>{text}</Text>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>
      {value}
    </Text>
  </View>
);

const ListItem = ({ }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#94ffa0',
      borderRadius: 15,
      padding: 10,
      marginTop: 10,
    }}>

    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <View style={{flex:1, flexDirection: 'column', }}>
      
          <Text style={styles.h2text}>{'Reminder'}</Text>
          <Text style={{ ...styles.regulartext, color: '#545454',position:'absolute',right:0 }}>{'2:00 AM'}</Text>
      
        <Text style={{ ...styles.regulartext, marginTop: 5, textAlign: 'auto' }}>{'Lorem isperm dolor sit amet, consectetur adipiscing elit.'}</Text>
      </View>
    </View>
  </View>
);


const NotificationScreen = () => {

  const [selectDay, setSelectDay] = React.useState();

  const onSelectDay = (day) => {
    setSelectDay(day);

  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
      <Text style={styles.h1text}>Notifications</Text>

      <ScrollView style={{ padding: 10 }}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ScrollView>
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
  },
  h2text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  h3text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  h5text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  h6text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  regulartext: {
    fontSize: 15,

    color: 'black',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
});

export default NotificationScreen;
