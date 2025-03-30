import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [lado, setLado] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularAreaDobro = () => {
    const ladoFloat = parseFloat(lado);

    if (isNaN(ladoFloat) || ladoFloat <= 0) {
      setResultado('Entrada inválida. O lado deve ser um número positivo.');
      return;
    }

    const area = lado *lado; 
    const dobroArea = area * 2; 

    setResultado(`A área do quadrado é: ${area.toFixed(2)}² \nO dobro da área é: ${dobroArea.toFixed(2)}²`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área do Quadrado</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor do lado do quadrado"
        keyboardType="numeric"
        value={lado}
        onChangeText={(text) => setLado(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcularAreaDobro}>
          <Text style={styles.buttonText}>Calcular Área e Dobro</Text>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
