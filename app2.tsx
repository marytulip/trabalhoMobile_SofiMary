import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function TransformadorTexto() {
  const [texto, setTexto] = useState('');
  const [textoTransf, setTextoTransf] = useState('');

  const maiuscula = () => {
    setTextoTransf(texto.toUpperCase());
  };

  const minuscula = () => {
    setTextoTransf(texto.toLowerCase());
  };

  const inverter = () => {
    setTextoTransf(texto.split("").reverse().join(""));
  };

  const contarLetras = () => {
    setTextoTransf(texto.length);
  };

  const limpar = () => {
    setTextoTransf("");
    setTexto("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        onChangeText={text => setTexto(text)}
        value={texto}
      />
      <Text style={styles.textoTransf}>Texto Transf: {textoTransf}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Maiúscula" onPress={maiuscula} />
        <Button title="Minúscula" onPress={minuscula} />
        <Button title="Inverter" onPress={inverter} />
        <Button title="Contar Letras" onPress={contarLetras} />
        <Button title="Limpar" onPress={limpar} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  textoTransf: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
  },
});
