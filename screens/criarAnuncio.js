import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";


const Separator = () => (
  <View style={styles.separator}/>
)

export default function CriarAnuncio( {navigation} ) {

  const [categoria, setCategoria] = useState('')
  const [cidade,setCidade] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado,] = useState('')
  const [contato, setContato] = useState('')

  const anunciar = () => {
    axios.post('https://630130f8e71700618a35dac0.mockapi.io/criarAnuncio',
        {
            "categoria": categoria,
            "cidade": cidade,
            "rua": rua,
            "numero": numero,
            "estado": estado,
            "contato": contato
        }
    ).then((response) => {
      navigation.navigate('Criar Anúncio Cômodos', {name : 'CriarAnuncioComodos'})
    }).catch(err => {
        alert("Falha no cadastro")
    })
  }

  return(
    <View style={styles.container}>
      <StatusBar hidden/>
      <Text style={styles.text}>Criar Anúncio</Text> 
      <Separator/>

      <Text>Categoria: </Text> 
      <TextInput  placeholder="Ex: Casa/Kitnet" style={styles.textInput} onChangeText={text => setCategoria (text)}/>
      <Text>Cidade:</Text> 
      <TextInput placeholder="Cidade" style={styles.textInput} onChangeText={text=> setCidade(text)}/>
      <Text>Rua:</Text> 
      <TextInput placeholder="Rua" style={styles.textInput} onChangeText={text=> setRua(text)}/>
      <Text>Número</Text> 
      <TextInput placeholder="Número" style={styles.textInput} onChangeText={number=> setNumero(number)}/>
      <Text>Estado:</Text> 
      <TextInput placeholder="Estado" style={styles.textInput} onChangeText={text=> setEstado(text)}/>
      <Text>Contato</Text> 
      <TextInputMask style={styles.textInput}
       placeholder="Contato" 
       type={'cel-phone'}
       options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99)'
       }}
       value={contato}
       onChangeText={text => setContato(text)}
      />

      <TouchableOpacity style={styles.btnProximo} color={'white'} alignItems={'center'} onPress={() => anunciar()}>
         <Text style={styles.textbtnProximo}> Próximo </Text>
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
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor:'#D3D3D3',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 8,
  },

  btnProximo: {
    width: '30%',
    left: '63%',
    height: 40,
    color: 'white',
    backgroundColor:'#004AAD',
    alignItems: 'center',
    borderRadius: 7,
    justifyContent:'center',
    margin: 20
  },

  textbtnProximo: {
    color: 'white',    
    justifyContent: 'center'
  },

  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373'
  },

  text:{
    fontWeight: "bold",
    fontSize: 28,
    textAlign: 'center',
  },

  image: {
    width: 200,
    height: 200
  }
})