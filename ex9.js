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
