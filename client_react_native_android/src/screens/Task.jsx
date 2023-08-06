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

const ShowDetails = ({text, value}) => (
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
    <Text style={{color: 'white', fontSize: 20}}>{text}</Text>
    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 28}}>
      {value}
    </Text>
  </View>
);

const ListItem = ({}) => (
  <View
    style={{
      backgroundColor: 'white',
      borderColor: '#5c5c5c',
      borderWidth: 1,
      borderRadius: 15,
      padding: 10,
      marginTop: 5,
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={HomeCleaning} style={{width: 60, height: 60}} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.h2text}>{'Home Cleaning'}</Text>
        <Text style={styles.regulartext}>{'Main Lobby'}</Text>
      </View>

   
    </View>
    <View
    style={{
      backgroundColor: 'black',
      padding:7,
     borderBottomRightRadius:15,
     borderTopLeftRadius:15,
      position: 'absolute',
      bottom: 0,
      right: 0,
    }}>
    <Text style={{color: 'white', fontWeight: '300'}}>8 : 00 AM</Text>
  </View>
  </View>
);

const DayButton = ({value, value2, focuesd,onClick}) => (
  <TouchableOpacity
    onPress={onClick}
    style={{
      position: 'relative',
      borderColor: '#31f548',
      borderWidth: 1,
      padding: 5,
      width: 50,
      alignItems:'center',
      backgroundColor:focuesd? '#31f548' : 'white',
      borderRadius:5,
    }}>
    <Text style={styles.h1text}>{value}</Text>
    <Text style={styles.h3text}>{value2}</Text>
  </TouchableOpacity>
);

const TaskScreen = () => {

  const [selectDay,setSelectDay] = React.useState();

  const onSelectDay = (day)=>{
    setSelectDay(day);

  }

  return (
    <View style={{flex: 1, backgroundColor: '#31f548'}}>
      <View style={{backgroundColor: 'black',width:'100%',height:20,position:'absolute'}}/>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius:15,
            padding: 10,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
              {' '}
              My Tasks
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
                {' '}
                Today
              </Text>
              <Text>{'13 August Monday'}</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15,marginBottom:20}}>
              <DayButton value={'01'} value2={'Mon'} onClick={()=> onSelectDay(1)} focuesd={selectDay==1}/>
              <DayButton value={'03'} value2={'Wed'} onClick={()=> onSelectDay(3)} focuesd={selectDay==3}/>
              <DayButton value={'02'} value2={'Tue'} onClick={()=> onSelectDay(2)} focuesd={selectDay==2}/>
              <DayButton value={'04'} value2={'Thu'} onClick={()=> onSelectDay(4)} focuesd={selectDay==4}/>
              <DayButton value={'05'} value2={'Fri'} onClick={()=> onSelectDay(5)} focuesd={selectDay==5}/>
            </View>
          </View>

          {/*Completed Task List*/}
        </View>
     
      <ScrollView style={{padding: 10}}>
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

export default TaskScreen;
