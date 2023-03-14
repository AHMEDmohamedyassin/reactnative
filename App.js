import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View , Image, TextInput , Pressable, TouchableHighlight, TouchableOpacity } from 'react-native';
import MainPage from './src/mainPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPage from './src/ListPage';
import ReduxListPage from './src/ReduxListPage';
import { Provider } from 'react-redux';
import Store from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ReduxListPage" component={ReduxListPage}/>
        <Stack.Screen name="ListPage" component={ListPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
