import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, Alert, hidePass } from "react-native";
import React, {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';

export default function Login( {navigation} ){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [hidePass, setHidePass] = useState(true);


    function login(){
        if (email === "" || senha === ""){
            Alert.alert("Informe seu login e senha")
        }else{
            navigation.navigate('Menu', {name: 'menu'})
        }
    }

    return(
        <View style={styles.container}>

            <Image style={styles.image} source={require('../assets/rent.jpg')} />
            <Text style={styles.text}>Login</Text>

            <View style={styles.inputArea}>
                <TextInput style={styles.textInput} placeholder='E-mail' onChangeText={ text => setEmail(text)} />
            </View>

            <View style={styles.inputArea}>
                <TextInput  style= { styles.textInput} placeholder='Insira sua senha' onChangeText={(text) => setSenha(text)} secureTextEntry={hidePass}/>
                <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                { hidePass ? 
                    <Ionicons name="eye" color="#696969" size={25}/>
                    :
                    <Ionicons name="eye-off" color="#696969" size={25}/>
                }
                    </TouchableOpacity>
            </View>
      
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
        width: '85%',
        height: 40,
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
    }, 
    icon: {
        width: '15%',
        height:50,
        justifyContent: 'center',
        alignContent: 'center'
    },
    inputArea: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#D3D3D3',
        height: 45,
        alignItems: 'center',
        marginTop: 20,
    },
    icon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignContent: 'center'
    },
})