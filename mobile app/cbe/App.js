
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import ScrollView from './Screens/ScrollViewExample';
import FlatListScroll from './Screens/FlatListScroll';
import FetchDataFromApi from './Screens/FetchDataFromApi';
import FetchPhoto from './Screens/FetchPhoto';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
         <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
             <Stack.Screen  name='Home' component={HomeScreen}/>
             <Stack.Screen  name='Details' component={DetailsScreen}/>
             <Stack.Screen  name='scrollView' component={ScrollView}/>
             <Stack.Screen  name='FlatListScroll' component={FlatListScroll}/>
             <Stack.Screen  name='FetchData' component={FetchDataFromApi}/>
             <Stack.Screen  name='FetchPhoto' component={FetchPhoto}/>

          </Stack.Navigator>
         </NavigationContainer>
  )
}