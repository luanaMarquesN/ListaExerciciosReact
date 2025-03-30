import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [raio, setRaio] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularArea = () => {
    const r = parseFloat(raio);

    if (isNaN(r) || r <= 0) {
      setResultado('Entrada inválida. O raio deve ser um número positivo.');
      return;
    }

    const area = Math.PI * Math.pow(r, 2);
    setResultado(`A área do círculo é: ${area.toFixed(2)} m`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área do Círculo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o raio do círculo"
        keyboardType="numeric"
        value={raio}
        onChangeText={(text) => setRaio(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcularArea}>
          <Text style={styles.buttonText}>Calcular Área</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#1e1e1e',
    color: '#fff', 
  },
  buttonContainer: {
    marginTop: 20,
  },
   image: {
    width: 186,
    height: 271,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF4081', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
  },
});

