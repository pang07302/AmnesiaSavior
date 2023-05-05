import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RoundButton from './src/components/buttons/RoundButton';
import SquareButton from './src/components/buttons/SquareButton';

export default function App() {
  return (
    <View style={styles.container}>
      
      <RoundButton label={"Get Started"} onPress={() => console.log("Redirect to another page")}/>
      <SquareButton iconSource={"google"} onPress={() => console.log("continue with Google")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
