import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [tamanhoArquivo, setTamanhoArquivo] = useState('');
  const [velocidadeInternet, setVelocidadeInternet] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularTempoDownload = () => {
    const tamanhoMB = parseFloat(tamanhoArquivo); // Tamanho do arquivo em MB
    const velocidadeMbps = parseFloat(velocidadeInternet); // Velocidade de download em Mbps

    if (isNaN(tamanhoMB) || isNaN(velocidadeMbps) || tamanhoMB <= 0 || velocidadeMbps <= 0) {
      setResultado('Entrada inválida. Certifique-se de que ambos os valores sejam positivos e numéricos.');
      return;
    }

    // Cálculo do tempo em segundos
    const tempoSegundos = tamanhoMB / (velocidadeMbps / 8);
    
    // Cálculo do tempo em minutos
    const tempoMinutos = (tempoSegundos / 60).toFixed(2);

    setResultado(`Tempo estimado de download: ${tempoMinutos} minutos`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Tempo de Download</Text>

      <TextInput
        style={styles.input}
        placeholder="Tamanho do arquivo (em MB)"
        keyboardType="numeric"
        value={tamanhoArquivo}
        onChangeText={(text) => setTamanhoArquivo(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Velocidade da Internet (em Mbps)"
        keyboardType="numeric"
        value={velocidadeInternet}
        onChangeText={(text) => setVelocidadeInternet(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcularTempoDownload}>
          <Text style={styles.buttonText}>Calcular Tempo</Text>
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

