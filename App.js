import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import DashboardInicial from './pages/DashboardInicial';
import Cadastrar from './pages/Cadastrar';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="DashboardInicial" component={DashboardInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

