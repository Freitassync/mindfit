import { StyleSheet, Text, View } from 'react-native';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text>Página de Cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});