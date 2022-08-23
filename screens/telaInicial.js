import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export default function Menu( {navigation}) {
  return (
    <View style={styles.container}>

      <Image style={styles.Image} source={require('../assets/rent.jpg')} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login', {name: 'login'})}>
        <Text style={{color:'white', textAlign:'center'}}>Fazer Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro', {name: 'cadastro'})}>
        <Text style={{color:'white', textAlign:'center'}}>Cadastrar-se</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  style:{
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    fontSize: 18,
    fontWeight: 700
  },
  button: {
    backgroundColor: '#004AAD',
    width: '60%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10
    
  },
  Image: {
    width:250,
    height: 250,
    paddingTop: 50,
    margin: 45
  },
  text: {
    color:'black', 
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 28, 
    margin: 10
  }
});

