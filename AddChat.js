import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,

} from 'react-native';

class AddChat extends Component {
  constructor(props){
    super(props);
     this.state = {
       username:null,
       room:null
    };
  }
  
  componentDidMount() {

  }

  onCreate=()=>{

    this.props.navigation.navigate('Chat',{username:this.state.username,room:this.state.room})
  }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={styles.content}>

            <TextInput 
              placeholder="User Name" 
              style={styles.textInput} 
              onChangeText={txt=>{this.setState({username:txt})}}/>

            <TextInput 
              placeholder="Room" 
              style={styles.textInput} 
              onChangeText={txt=>{this.setState({room:txt})}}/>

            <TouchableOpacity 
              style={styles.buttonLogin} 
              onPress={this.onCreate}>
                <Text style={{fontSize:15}}>Create</Text>
            </TouchableOpacity>

          </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonLogin: {
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius:25,
    height: 50,
    marginBottom:8
  },
  textInput:{
    borderRadius:25,
    height: 50, 
    borderColor: 'gray',
    borderWidth: 1,
    paddingStart:20,
    marginBottom:8
  },
  content:{
    padding:16,
    margin:16,
    width:"90%"
  }
  
});


export default AddChat;