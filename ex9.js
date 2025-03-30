import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [salarioHora, setSalarioHora] = useState(''); 
  const [horas, setHoras] = useState(''); 
  const [salarioMes, setSalarioMes] = useState(''); 

  const calcular = () => {
    const salarioH = parseFloat(salarioHora);
    const h = parseFloat(horas);

    if (isNaN(salarioH) || isNaN(h) || h === 0) {
      setSalarioMes('Entrada inválida');
      return;
    }

    setSalarioMes("O seu salário mensal é de: " +salarioH* h+ "R$");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salário Mensal</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a quantidade de horas trabalhadas por mês "
        keyboardType="numeric"
        value={horas}
        onChangeText={(text) => setHoras(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o valor que você ganha por hora:"
        keyboardType="numeric"
        value={salarioHora}
        onChangeText={(text) => setSalarioHora(text)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>{salarioMes}</Text>
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

