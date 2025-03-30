import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState(''); 
  const [valor2, setValor2] = useState(''); 
  const [resultado, setResultado] = useState(''); 

  const calcularEnergia = () => {
    const massa = parseFloat(valor1);
    const velocidade = parseFloat(valor2);

    if (isNaN(massa) || isNaN(velocidade) || velocidade === 0) {
      return 'Entrada inválida';
    }

    const energiaCinetica = massa * (velocidade * velocidade) / 2;
    return `A energia cinética desse objeto é: ${energiaCinetica} J`; 
  };


  const mostrarResultado = () => {
    const resultadoCalculado = calcularEnergia(); 
    setResultado(resultadoCalculado); 
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo da Energia Cinética</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a massa do objeto (em kg):"
        keyboardType="numeric"
        value={valor1}
        onChangeText={(text) => setValor1(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a velocidade do objeto (em m/s)"
        keyboardType="numeric"
        value={valor2}
        onChangeText={(text) => setValor2(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={mostrarResultado

        }>
          <Text style={styles.buttonText}>Calcular energia cinética</Text>
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
