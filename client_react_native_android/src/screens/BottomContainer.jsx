import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import HomeScreen from './Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileImage from '../../assets/profile.png'
import TaskScreen from './Task';
import NotificationScreen from './Notification';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      header: () => {
        return (
          <View style={{ backgroundColor: 'black', height: 110,padding:5 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={ProfileImage} style={{ width: 80, height: 80, borderRadius: 80 }} />

                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>Hello, {'\n'}
                  Thura Lin Htut
                </Text>
              </View>
              <View style={{ flexDirection:'row'}}>
                <Icon name='search' size={30} color={'#fff'} style={{margin:5}} />
                <Icon name='notifications' size={30} color={'#fff'} style={{margin:5}} />
              </View>
            </View>

          </View>
        )
      },
      tabBarLabelStyle: { marginBottom: 5 }
    }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (

            <Icon name='home' color={color} size={25} />
          )
        }}
      />
      <Tab.Screen name="tasks" component={TaskScreen}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color }) => (
            <Icon name='content-copy' color={color} size={25} />
          )
        }}
      />
      <Tab.Screen name="schedule" component={NotificationScreen}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color }) => (
            <Icon name='calendar-month' color={color} size={25} />
          )
        }}
      />
      <Tab.Screen name="report" component={HomeScreen}
        options={{
          tabBarLabel: "Report",
          tabBarIcon: ({ color }) => (
            <Icon name='content-paste' color={color} size={25} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
