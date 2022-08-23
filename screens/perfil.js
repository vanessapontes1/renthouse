import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

const Separator = () => (
    <View style={styles.separator}/>
)

export default function Perfil( {navigation} ) {

  const [cadastro, setCadastro] = useState([]);
  useEffect(() => {
    axios.get("https://630130f8e71700618a35dac0.mockapi.io/cadastro/1")
      .then((response)=> {
        console.log(response);
        setCadastro(response.data)
      })
      .catch((err) => {
        console.error("Ops..." + err);
      })
  }, []);

    return(
        <View style={styles.container}>

            <Text style={styles.text}>Meu Perfil</Text>
            <Text key={cadastro.id}/>
            <Text>Nome:</Text>
            <Text style={styles.textInput}>{cadastro.nome}</Text>
            <Text>Data de Nascimento:</Text>
            <Text style={styles.textInput}>{cadastro.dataNascimento}</Text>
            <Text>Estado:</Text>
            <Text style={styles.textInput}>{cadastro.estado}</Text>
            <Text>Cidade:</Text>
            <Text style={styles.textInput}>{cadastro.cidade}</Text>
            <Text>Email:</Text>
            <Text style={styles.textInput}>{cadastro.email}</Text>
            

            <Separator/>
            {/* <TouchableOpacity style={styles.btnCadastro} onPress={() => alert()}>
                <Text style={{color:'white', textAlign:'center'}}>Alterar</Text>
            </TouchableOpacity> */}
      

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
    text: {
      color:'black', 
      textAlign:'center', 
      fontWeight: 'bold',
      fontSize: 28, 
      margin: 10
    },
      btnCadastro:{
        width: '50%',
        left: '50%',
        height: 40,
        backgroundColor:'#761212',
        borderRadius: 5,
        justifyContent:'center'
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
      },
      textInput:{
        width: '100%',
        height: 40,
        backgroundColor:'#D3D3D3',
        borderRadius: 5,
        paddingTop: 10,
        paddingLeft: 10,
        marginBottom: 8,
      },

})
