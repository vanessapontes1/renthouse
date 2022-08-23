import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";


  export default function CriarAnuncioComodos( {navigation} ) {

    const [sala, setSala] = useState('')
    const [quarto, setQuarto] = useState('')
    const [banheiro, setBanheiro] = useState('')
    const [cozinha, setCozinha] = useState('')
    const [areadeservico, setAreadeServico] = useState('')
    const [garagem, setGaragem] = useState('')
    const [valor, setValor] = useState('')


    return(
      <View style={styles.container}>
         <StatusBar hidden/>
         <Text style={styles.text}>Criar Anúncio</Text>
         <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 20, color:'#7E7979'}}>Cômodos</Text>
         <Text>Sala</Text> 
         <TextInput style={styles.textInput} onChangeText={number => setSala (number)}/>
         <Text>Quarto</Text> 
         <TextInput style={styles.textInput} onChangeText={text=> setQuarto(text)}/>
         <Text>Banheiro</Text> 
         <TextInput style={styles.textInput} onChangeText={text=> setBanheiro(text)}/>
         <Text>Cozinha</Text> 
         <TextInput style={styles.textInput} onChangeText={text=> setCozinha(text)}/>
         <Text>Área de Serviço</Text> 
         <TextInput style={styles.textInput} onChangeText={number=> setAreadeServico(number)}/>
         <Text>Garagem</Text> 
         <TextInput style={styles.textInput} onChangeText={number=> setGaragem(number)}/>

         <Text>Valor</Text> 
         <TextInput style={styles.valor} onChangeText={number=> setValor(number)}/>

        <TouchableOpacity style={styles.btnProximo} alignItems={'center'} onPress={() =>  navigation.navigate('Tirar Foto', {name: 'tirarFoto'})}>
            <Text style={{color:"white"}}>Inserir Foto</Text>
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
      width: '40%',
      height: 40,
      backgroundColor:'#D3D3D3',
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 8,
    },
    text:{
      color:'black', 
      textAlign:'center', 
      fontWeight: 'bold',
      fontSize: 28, 
      margin: 10
    },
    valor:{
      width: '80%',
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
      color: 'pink',
      backgroundColor:'#004AAD',
      alignItems: 'center',
      borderRadius: 7,
      justifyContent:'center',
      margin: 20
    }
  })