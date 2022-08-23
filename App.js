import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './screens/cadastro';
import Menu from './screens/menu';
import TelaInicial from './screens/telaInicial';
import Login from './screens/login';
import CriarAnuncio from './screens/criarAnuncio';
import CriarAnuncioComodos from './screens/criarAnuncioComodos';
import Perfil from './screens/perfil';
import TirarFoto from './screens/tirarFoto';
import Imoveis from './screens/imoveis'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Criar Anúncio" component={CriarAnuncio}/>
        <Stack.Screen name="Criar Anúncio Cômodos" component={CriarAnuncioComodos}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Tirar Foto" component={TirarFoto}/>
        <Stack.Screen name="Imoveis" component={Imoveis}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;