/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import * as C from '../Register/styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

function Register() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [codCountry, setCodCountry] = useState('');
  const [codArea, setCodArea] = useState('');
  const [numPhone, setNumPhone] = useState('');

  const handleClick = async () => {
    axios
      .post('http://192.168.0.105:8080/People', {
        firstName: firstName,
        lastName: lastName,
        company: company,
        listPhones: [
          {
            codCountry: codCountry,
            codArea: codArea,
            numPhone: numPhone,
          },
        ],
      })
      .then(response => {
        if (response.status === 200) {
          // eslint-disable-next-line no-alert
          alert('Contato criado!');
        }
      });
  };

  return (
    <View style={{flex: 1}}>
      <C.ContainerContatos>
        <TouchableOpacity>
          <Icon
            name="chevron-left"
            size={25}
            style={{marginTop: 35}}
            color="#000000"
            onPress={() => navigation.navigate('Home')}
          />
        </TouchableOpacity>
        <C.Contatos>Contato</C.Contatos>
      </C.ContainerContatos>

      <C.ContainerInput>
        <Icon name="user" size={20} style={{margin: 12}} color="#196c2e" />
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Nome"
          style={[
            {borderBottomWidth: 0.5, borderBottomColor: '#196c2e', flex: 1},
          ]}
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="Sobrenome"
          style={[
            {borderBottomWidth: 0.5, borderBottomColor: '#196c2e', flex: 1},
          ]}
        />
      </C.ContainerInput>
      <C.ContainerInput>
        <Icon name="briefcase" size={20} style={{margin: 12}} color="#196c2e" />
        <TextInput
          value={company}
          onChangeText={setCompany}
          placeholder="Trabalho"
          style={[
            {borderBottomWidth: 0.5, borderBottomColor: '#196c2e', flex: 1},
          ]}
        />
      </C.ContainerInput>
      <C.ContainerInput>
        <Icon name="phone" size={20} style={{margin: 12}} color="#196c2e" />
        <TextInput
          value={codCountry}
          onChangeText={setCodCountry}
          placeholder="+55"
          style={[
            {borderBottomWidth: 0.5, borderBottomColor: '#196c2e', flex: 1},
          ]}
        />
        <TextInput
          onChangeText={setCodArea}
          value={codArea}
          placeholder="016"
          style={[
            {borderBottomWidth: 0.5, borderBottomColor: '#196c2e', flex: 1},
          ]}
        />
        <TextInput
          onChangeText={setNumPhone}
          value={numPhone}
          placeholder="9985678"
          style={[
            {borderBottomWidth: 0.5, borderBottomColor: '#196c2e', flex: 3},
          ]}
        />
      </C.ContainerInput>
      {/* <C.ContainerInput>
        <TextInput
          // onChangeText={text => setNome(text)}
          // value={nome}
          placeholder="Email"
          style={[
            {borderBottomWidth: 0.5, borderBottomColor: '#196c2e', flex: 1},
          ]}
        />
      </C.ContainerInput> */}
      <C.ContainerButton>
        <TouchableOpacity onPress={() => handleClick(this)}>
          <C.ButtonSalvar>Salvar</C.ButtonSalvar>
        </TouchableOpacity>
      </C.ContainerButton>
    </View>
  );
}
export default Register;
