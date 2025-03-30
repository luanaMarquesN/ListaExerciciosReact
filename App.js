import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState(''); 
  const [valor2, setValor2] = useState(''); 
  const [resultado, setResultado] = useState(''); 

  const calcularMedia = () => {
    const distancia = parseFloat(valor1);
    const tempo = parseFloat(valor2);

    if (isNaN(distancia) || isNaN(tempo) || tempo === 0) {
      setResultado('Entrada inválida');
      return;
    }

    const velocidadeMedia = distancia / tempo;
    setResultado(`A velocidade média do veículo é: ${velocidadeMedia} km/h`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Velocidade</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a distância percorrida pelo veículo (em km)"
        keyboardType="numeric"
        value={valor1}
        onChangeText={(text) => setValor1(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o tempo que o veículo percorreu essa distância (em horas)"
        keyboardType="numeric"
        value={valor2}
        onChangeText={(text) => setValor2(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcularMedia}>
          <Text style={styles.buttonText}>Calcular</Text>
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
  },
});
