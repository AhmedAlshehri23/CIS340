import React from 'react';
import {Text, TextInput, View} from 'react-native';


export default function MyApp() {

  const {pet} = "Dog";
  return (
    <View>
      <Text>
      Hello, I am a student at CIS340! {"\n"}
      </Text>
      </View>
  
  );
}

export default function MultiComp(){
  return (
  < View style={{
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center'
  }}>
  
  <Text> Welcome to My Class </Text>
  <MyApp />
  <MyApp />
  <MyApp />
  <MyApp />
  </View>
  
  );
  }
