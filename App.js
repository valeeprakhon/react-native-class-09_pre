import React, { Component } from 'react';
import { View, StyleSheet} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import AddChat from './AddChat'
import Chat from './Chat'


 const AddChatScreen =()=> {
    const navigation = useNavigation();
    const route =  useRoute();
    return (
      <AddChat navigation={navigation} route={route}/>
    );
  }

const ChatScreen =()=> {
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <Chat navigation={navigation} route={route}/>
    );
  }

const Stack = createStackNavigator();
const MyStack=()=>{
      return (
        <Stack.Navigator>
          <Stack.Screen name="AddChat" 
            component={AddChatScreen} 
            options={{ headerShown: true, title:"Create Chatter"}}/>

          <Stack.Screen name="Chat" 
            component={ChatScreen} 
            options={{ headerShown: true, title:"Chatter"}}/>

        </Stack.Navigator>
      );
  }


export default class App extends Component {

  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  render(props) {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}