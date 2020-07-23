import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Button } from 'react-native'
import { MovieContextProvider } from  './src/context/MovieContext'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from './src/pages/HomePage'
import SearchPage from './src/pages/SearchPage'
import FavouritePage from './src/pages/FavouritePage'
import MovieDetailPage from './src/pages/MovieDetailPage'

const Stack = createStackNavigator();

const App = () => {

  return (
  <MovieContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={( {navigation} ) => ({
          headerTitle: null,
          headerRight: () => 
            <Button
              onPress={()=> navigation.navigate('FavouritePage')}
              title="Favourite"
            />,
        })}
        
      />
        <Stack.Screen options={() => ({ headerTitle: null })} name="SearchPage" component={SearchPage} />
        <Stack.Screen options={() => ({ headerTitle: null })} name="FavouritePage" component={FavouritePage} />
        <Stack.Screen 
          name="MovieDetailPage" 
          component={MovieDetailPage} 
          options={( {navigation} ) => ({
            headerTitle: null,
            headerRight: () => 
              <Button
                onPress={()=> navigation.navigate('Home')}
                title="Back to Search"
              />,
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
    </MovieContextProvider>
  )
}

export default App