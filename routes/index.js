import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './../ecrants/tabs/tabs';
import ArticleDetails from '../ecrants/ArticleDetails/ArticleDetails';
import Tag from '../ecrants/Tag/Tag';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Acceuil"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Acceuil" component={Tabs} />
        <Stack.Screen name="ArticleDetails"
          component={ArticleDetails}
          options={{
            headerShown: true,
            headerRight: () => (
              <Image
                source={require('../assets/gateNewsLogo.png')}
                style={{ width: 75,height:75, resizeMode: 'contain' }}
              />
            ),
            headerTitle:''
          }}
        />
        <Stack.Screen name="Tag" 
        component={Tag}
        options={{
          headerShown:'true',
          headerRight: () => (
            <Image
              source={require('../assets/gateNewsLogo.png')}
              style={{ width: 75,height:75, resizeMode: 'contain' }}
            />
          ),
          headerTitle:''
        }}
         />
      </Stack.Navigator>
      
    </NavigationContainer>

  )
}

export default Routes

//{/* une fois rehefa misy navigation NavigationContainer dia tsy mahazo asina tsuno  */ }