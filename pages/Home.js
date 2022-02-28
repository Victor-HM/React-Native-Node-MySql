import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Home({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.text}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    width: '50%',
    height: 80,
    backgroundColor: '#123456',
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  }
})