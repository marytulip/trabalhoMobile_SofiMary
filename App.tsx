import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const VALID_USER = 'usuario';
  const VALID_PASS = '1234';

  const login = () => {
    if (username === VALID_USER && password === VALID_PASS) {
      setIsAuthenticated(true);
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };

  const logout = () => {
    setUsername('');
    setPassword('');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    // Tela de Login
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela Inicial após login
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {username}!</Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80DEEA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#E0F7FA',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#26C6DA',
    fontWeight: 'bold',
  },
});
