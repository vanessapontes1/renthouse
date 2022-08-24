import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons';
import axios from "axios"
import { ScrollView } from "react-native";

export default function MeusAnuncios( {navigation} ) {

    const [criarAnuncio, setCriarAnuncio] = useState([]);
    useEffect(() => {
      axios.get("https://630130f8e71700618a35dac0.mockapi.io/criarAnuncio/1")
        .then((response)=> {
          console.log(response);
          setCriarAnuncio(response.data)
        })
        .catch((err) => {
          console.error("Ocorreu um erro" + err);
        })
    }, []);

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputArea}>
                <Feather size={24} color="black" name="search"  />
                <TextInput style={styles.input}/>
            </View>
            <Text style={styles.text}> Meus Anúncios </Text>
            <Image style={styles.image} source={require('../assets/casa3.jpg')} />
            
            <View style={styles.view}>
                <Text style={styles.titulo}>Cidade:</Text>
                <Text style={styles.info}>{criarAnuncio.cidade}</Text>

                <Text style={styles.titulo}>Rua:</Text>
                <Text style={styles.info}>{criarAnuncio.rua}</Text>

            </View>

            <Image style={styles.image} source={require('../assets/casa4.jpg')} />
            <View style={styles.view}>
                <Text style={styles.titulo}>Cidade:</Text>
                <Text style={styles.info}>{criarAnuncio.cidade}</Text>

                <Text style={styles.titulo}>Rua:</Text>
                <Text style={styles.info}>{criarAnuncio.rua}</Text>

            </View>

        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 60,
    },
    text: {
      color:'black', 
      textAlign:'center', 
      fontWeight: 'bold',
      fontSize: 28, 
      margin: 10
       
    },
    image: {
      width:250,
      height: 150,
      marginTop: 5,
      margin: 5,
      marginLeft: 50
      
    },
    view: {
        flexDirection:'row',
        textAlign:"left",
        right: '2%',
        paddingTop: 4,
        paddingLeft: 50
    },
    titulo: {
        color:'black', 
        fontWeight: 'bold',
        fontSize: 15, 
        margin: 2,
    },
    info: {
        fontSize: 15, 
        margin: 2,
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight:5
    },
    inputArea:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        backgroundColor:  '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 45,
        borderRadius: 10,
        marginTop: 7,
        marginLeft: 17
      },
})