import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);

export default function Menu( {navigation} ) {
  return (
    <View style={styles.container}>

      <Image style={styles.Image} source={require('../assets/rent.jpg')} />
      <Separator/>

      <Text style={styles.text}>Menu</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil', {name: 'Perfil'})}>
        <Text style={{color:'white', textAlign:'center'}}>Meu Perfil</Text>
      </TouchableOpacity>
      <Separator/>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Criar Anúncio', {name: 'CriarAnuncio'})}>
        <Text style={{color:'white', textAlign:'center'}}>Criar Anúncio</Text>
      </TouchableOpacity>
      <Separator/>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Imoveis', {name: 'Imoveis'})}>
        <Text style={{color:'white', textAlign:'center'}}>Ver Imóveis</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSair} onPress={() =>  navigation.navigate('Login', {name: 'login'})}>
        <Text style={{color:'white', textAlign:'center'}}>Sair</Text>
      </TouchableOpacity>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  button: {
    backgroundColor: '#004AAD',
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
    
  },
  btnSair:{
    width: '30%',
    left: '30%',
    marginTop: 70,
    height: 40,
    backgroundColor:'#FFC199',
    borderRadius: 5,
    justifyContent:'center'
  },
  Image: {
    width:230,
    height: 230,
    },
  text: {
    color:'black', 
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 28, 
    margin: 20
  }
});


