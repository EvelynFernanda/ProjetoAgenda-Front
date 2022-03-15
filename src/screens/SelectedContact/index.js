/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import * as C from '../SelectedContact/styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

function SelectedContact(props) {
  const navigation = useNavigation();
  const deleteAlert = () => {
    Alert.alert(null, 'Tem certeza que deseja excluir este contato?', [
      {
        text: 'Cancelar',
        onPress: () => navigation.navigate('SelectedContact'),
      },
      {
        text: 'Excluir',
        // onPress: deletarNota,
      },
    ]);
  };
  return (
    <View style={{backgroundColor: '#196c2e', flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Icon
            name="chevron-left"
            size={35}
            style={{marginTop: 35}}
            color="#fff"
            onPress={() => navigation.navigate('Home')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="x"
            size={35}
            style={{marginTop: 35}}
            color="#fff"
            onPress={deleteAlert}
          />
        </TouchableOpacity>
      </View>

      <C.ContainerContato>
        <C.NomeContato>
          <Icon
            name="user"
            size={23}
            color="#196c2e"
            style={{marginTop: 5, marginRight: 5}}
          />
          Evelyn Fernanda{props.nomeContato}
        </C.NomeContato>
        <C.InfoContato>16996043673</C.InfoContato>
        <C.InfoContato>IBM</C.InfoContato>
      </C.ContainerContato>
    </View>
  );
}

export default SelectedContact;
