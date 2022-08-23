import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";

const Separator = () => (
    <View style={styles.separator}/>
)

export default function Cadastro( {navigation}) {

  const [nome, setNome] = useState('')
  const [dataNascimento,setDataNascimento] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade,] = useState('')
  const [ email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const cadastro = () => {
    axios.post('https://630130f8e71700618a35dac0.mockapi.io/cadastro',
        {
            "nome": nome,
            "data": new Date(dataNascimento),
            "estado": estado,
            "cidade": cidade,
            "email": email,
            "senha": senha
        }
    ).then((response) => {
      navigation.navigate('Menu', {name: 'menu'})
    }).catch(err => {
        alert("Falha no cadastro")
    })
  }

  return(
    <View style={styles.container}>
      <StatusBar hidden/>
      <Text style={styles.text}>Cadastrar-se</Text>

      <Separator/>

      <Text>Nome:</Text>
      <TextInput placeholder="Nome" style={styles.textInput} onChangeText={text=> setNome(text)}/>
      <Text>Data de Nascimento:</Text>
      <TextInput placeholder="Data de Nascimento" style={styles.textInput} onChangeText={text=> setDataNascimento(text)}/>
      <Text>Estado:</Text>
      <TextInput placeholder="Estado" style={styles.textInput} onChangeText={text=> setEstado(text)}/>
      <Text>Cidade:</Text>
      <TextInput placeholder="Cidade" style={styles.textInput} onChangeText={text=> setCidade(text)}/>
      <Text>Email:</Text>
      <TextInput placeholder="Email" style={styles.textInput} onChangeText={text=> setEmail(text)}/>
      <Text>Senha:</Text>
      <TextInput secureTextEntry={true} placeholder="Senha" style={styles.textInput} onChangeText={text=> setSenha(text)}/>

      <Separator/>
      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text style={{color:'white', textAlign:'center'}}>Cadastrar</Text>
      </TouchableOpacity>
      

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20
  },
  textInput:{
    width: '100%',
    height: 40,
    backgroundColor:'#D3D3D3',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 8,
  },
  btnCadastro:{
    width: '50%',
    left: '50%',
    height: 40,
    backgroundColor:'#004AAD',
    borderRadius: 5,
    justifyContent:'center'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
  },
  text: {
    color:'black', 
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 28
  }
})
