import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';

import BackgroundHeader from './components/BackgroundHeader';
import BottomTab from './components/BottomTab';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileScreen from './Screens/ProfileScreen';
/*
import Login from './Screens/Login'
import LetterOfCommitment from './Screens/LetterOfCommitment'
import Home from './Screens/HomeScreen'


export default function() {
  return (
    <Home />
  );
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1c313a"
          barStyle="light-content"
        />
        <LetterOfCommitment/>
      </View>
    );
  }
}
*/
const App = () => {
  return(
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container} >
        <BackgroundHeader style={styles.bg} />
        <ScrollView style={styles.scrollView}>
          <ProfileScreen />
        </ScrollView>
        <BottomTab />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width
  },
});
  
export default App;