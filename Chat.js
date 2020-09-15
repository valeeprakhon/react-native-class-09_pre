import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList

} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';


class Chat extends Component {
  constructor(props){
    super(props);
     this.state = {
       text:null,
       messages:[],
       test:null
    };

    const { route } = this.props;
    this.username = route.params.username;
    this.room = route.params.room;
    
  }

  componentDidMount() {

  }


  renderItem=({item})=>{
    return(
      <View>
        {item.sender===this.username&&<View style={{flexDirection:"row", justifyContent:"flex-end"}}>
	        <Text numberOfLines={10} style={styles.txtSender}>{item.text}</Text>
	      </View>}

         {item.sender!==this.username&&<View style={{flexDirection:"row"}}>
          <View style={styles.icon}/>
	        <Text numberOfLines={10} style={styles.txtReceiver}>{item.text}</Text>
          </View>}

      </View>
    );
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 8,
        }}
      />
    );
  };

  onSend=()=>{
 
  }

  render(props) {
    return (
        <View style={{ flex: 1,padding:8}}>
          <View style={styles.content}>
            <FlatList
              data={this.state.messages}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
              ref={(ref) => { this.flatListRef = ref; }}
              onContentSizeChange={()=>this.flatListRef.scrollToEnd()}
            />
          
          </View>

          <View style={styles.chatContent}>
             <TextInput 
                placeholder="Message" 
                style={styles.textInput} 
                onChangeText={txt=>{this.setState({text:txt})}}/>

              <TouchableOpacity 
                onPress={this.onSend}>
                <MaterialCommunityIcons name="send-circle" size={40} color="gray" />
              </TouchableOpacity>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput:{
    height: 50,
    flex:1, 
    borderColor: 'gray',
    paddingStart:20,
  },
  content:{
    flex:1,
    padding:8,
    marginBottom:8,
    width:"100%",
  },
  chatContent:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"gray"
  },
  icon:{
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor:"red"
  },
  txtReceiver:{
    flexWrap:'warp',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    borderWidth:1,
    padding:8,
    marginLeft:4,
    flexShrink:1,
    borderColor:"red"
  },
   txtSender:{
    flexWrap:'warp',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    borderWidth:1,
    padding:8,
    flexShrink:1,
    borderColor:"black"
  }
  
});


export default Chat;
