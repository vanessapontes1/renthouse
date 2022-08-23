import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import React, {useState} from 'react';


export default function Login( {navigation} ){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    function login(){
        if (email === "" || senha === ""){
            Alert.alert("Preencher os campos")
        }else{
            navigation.navigate('Menu', {name: 'menu'})
        }
    }

    return(
        <View style={styles.container}>

            <Image style={styles.image} source={require('../assets/rent.jpg')} />

            <Text style={styles.text}>Login</Text>

            <Text>Email</Text>
            <TextInput style={styles.textInput} onChangeText={text=> setEmail(text)} placeholder="Email"/>

            <Text>Senha</Text>
            <TextInput style={styles.textInput} onChangeText={text=> setSenha(text)} placeholder="Senha" secureTextEntry={true}/>

            <TouchableOpacity style={styles.button} onPress={() => login()}>
                <Text style={{color:'white', textAlign:'center'}}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 110
    },
    textInput:{
        width: '100%',
        height: 40,
        backgroundColor:'#D3D3D3',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 8,
    },
    image:{
        width:230,
        height: 230,
        margin: 45
        
    },
    button: {
        width: '30%',
        left: '70%',
        marginTop: 10,
        height: 40,
        backgroundColor:'#004AAD',
        borderRadius: 5,
        justifyContent:'center'
    },
    text:{
        color:'black', 
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 28
    }
})