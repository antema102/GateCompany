import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Feed = () => {
  return (
    <View>
      <Text>Feed</Text>
    </View>
  );
};

const Article = () => {
  return (
    <View>
      <Text>Article</Text>
    </View>
  );
};

const Entreprenaria = () => {
  return (

      <Drawer.Navigator 
      initialRouteName='Test'
      >
        <Drawer.Screen name="Test" component={Feed} />
        <Drawer.Screen name="Error" component={Article} />
      </Drawer.Navigator>
 
  );
};

export default Entreprenaria;
