import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Provider ,MD3DarkTheme, MD3LightTheme, Button, TextInput} from 'react-native-paper';


export default function App() {
  return (
    <Provider theme={myThemeLight}>
      
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={() => Alert.alert('Simple Button pressed')}
        >SOY UN BOTON</Button>
        <StatusBar style="auto" />
        
      </View>
      <TextInput style={styles.input}>AAA</TextInput>
      <TextInput style={styles.input}>AAA</TextInput>
      
    </Provider>
  );
}
const myThemeDark = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors
  }
  
};
const myThemeLight = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
