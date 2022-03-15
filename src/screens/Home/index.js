/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import * as C from '../Home/styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {SafeAreaView} from 'react-native-safe-area-context';

function Home() {
  const navigation = useNavigation();

  const [contact, setContact] = useState([]);
  console.log(contact);

  useEffect(() => {
    api
      .get('/People')
      .then(response => setContact(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <C.ContainerContatos>
        <C.Contatos>Meus contatos</C.Contatos>
      </C.ContainerContatos>
      <ScrollView style={{flex: 1}}>
        {contact.length ? (
          <View style={{flex: 1}}>
            {contact.map(lista => (
              <C.ContainerLista key={lista.id}>
                <TouchableOpacity
                  style={{marginLeft: 30, flexDirection: 'row'}}
                  onPress={() => navigation.navigate('SelectedContact')}>
                  <Icon
                    name="user"
                    size={23}
                    color="#196c2e"
                    style={{marginTop: 5}}
                  />
                  <C.NomeLista>
                    {lista.firstName} {lista.lastName}
                  </C.NomeLista>
                </TouchableOpacity>
              </C.ContainerLista>
            ))}
          </View>
        ) : (
          <View style={{flex: 1}}>
            <C.ContainerSemContatos>
              <C.TextSemContatos>Sem contatos salvos</C.TextSemContatos>
              <C.TextSemContatos>Adicione agora</C.TextSemContatos>
            </C.ContainerSemContatos>
          </View>
        )}
      </ScrollView>
      <C.Button>
        <Icon.Button
          name="plus"
          onPress={() => navigation.navigate('Register')}
          size={30}
          backgroundColor="#196c2e"
        />
      </C.Button>
    </SafeAreaView>
  );
}

export default Home;
