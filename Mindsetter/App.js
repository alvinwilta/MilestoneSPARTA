import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Login from './Screens/Login'
import Register from './Screens/Register';
import Commitment from './Screens/LetterOfCommitment'
import HomeArticle from './Screens/HomeScreenArticle'
import HomeVideo from './Screens/HomeScreenVideo'
import Task from './Screens/TasksScreen'
import TaskDetail from './Screens/TasksDetailsScreen'
import AddTask from './Screens/AddTask'
import DiaryDetail from './Screens/DiaryDetailsScreen'
import AddDiary from './Screens/AddDiary'
import Goal from './Screens/Goal';
import ProfileScreen from './Screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
          <Stack.Screen name='Commitment' component={Commitment} options={{ headerShown: false }} />
          <Stack.Screen name='HomeArticle' component={HomeArticle} options={{ headerShown: false }} />
          <Stack.Screen name= 'HomeVideo' component={HomeVideo} options={{ headerShown: false }} />
          <Stack.Screen name= 'Task' component={Task} options={{ headerShown: false }} />
          <Stack.Screen name='TaskDetail' component={TaskDetail} options={{ headerShown: false }} />
          <Stack.Screen name='AddTask' component={AddTask} options={{ headerShown: false }} />
          <Stack.Screen name='DiaryDetail' component={DiaryDetail} options={{ headerShown: false }} />
          <Stack.Screen name='AddDiary' component={AddDiary} options={{ headerShown: false }} />
          <Stack.Screen name= 'Goal' component={Goal} options={{ headerShown: false }} />
          <Stack.Screen name= 'ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
 }
);

