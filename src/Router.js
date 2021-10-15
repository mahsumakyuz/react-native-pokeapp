import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Pokemons from './screens/Pokemons/Pokemons';
import Detail from './screens/Detail/Detail';

const HomeStack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: '#fff',
          card: '#316B83',
          text: '#fff',
          primary: '#fff',
        },
      }}>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Pokemons" component={Pokemons} />
        <HomeStack.Screen
          name="Detail"
          component={Detail}
          options={({route}) => ({
            title: route.params.item.name.toUpperCase(),
          })}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
