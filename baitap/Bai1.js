import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const Bai1 = () => {
  const [value, ketqua] = useState(0);
  return (
    <View style={{flex: 1,alignItems:'center'}}>
      <View style={{flex: 1}}>
        <Text style={{color: 'black', fontSize: 40}}>
          Chương Trình Tính Toán
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          height: 120,
          width: 120,
          borderRadius:10,
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 40,
            justifyContent: 'center',
            padding: 20,
            
            alignItems: 'flex-end',
          }}>
          {value}
        </Text>
      </View>
     
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flex: 4,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: 80,
            height: 80,
            alignItems: 'center',
            borderRadius: 5
          }}
          onPress={() => {
            ketqua(value + 1);
          }}>
          <Text style={{fontSize: 60, color: 'white'}}>+</Text>
        </TouchableOpacity>
        <View style={{width: 150}}/> 
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            width: 80,
            height: 80,
            alignItems: 'center',
            borderRadius:5
          }}
          onPress={() => {
            ketqua(value - 1);
          }}>
          <Text style={{fontSize: 60, color: 'red'}}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bai1;
