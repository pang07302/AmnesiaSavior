import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './src/screens/StartScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Card from './src/components/cards/Card';
import IconButton from './src/components/buttons/IconButton';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      {/* <StartScreen/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <Card itemName={'Website/App'} theme={'other'} icon={'application'} onPress={()=>console.log('click item card!')}/>
      {/* <IconButton iconSource={'search'} theme={'primary'} onPress={()=>console.log('search button click')}/> */}
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'red'
   
  },
});
