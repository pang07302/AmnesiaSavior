import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './src/screens/StartScreen';
import Login from './src/screens/Login';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      {/* <StartScreen/> */}
      <Login/>
        

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
