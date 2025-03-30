import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultadoC, setResultadoC] = useState("");
  const [resultadoF, setResultadoF] = useState("");

  const calcular1 = () => {
    const num1 = parseFloat(valor1);
    if (isNaN(num1)) {
      setResultadoC("Entrada inválida");
      return;
    }
    setResultadoC(
      valor1 + "°C é igual a: " + (num1 * 1.8 + 32).toFixed(2) + " °F"
    );
  };
       
  const calcular2 = () => {
    const num2 = parseFloat(valor2);
    if (isNaN(num2)) {
      setResultadoF("Entrada inválida");
      return;
    }
    setResultadoF(
    valor2 + "°F é igual a: " + ((num2 - 32) / 1.8).toFixed(2) + " °C"
    );
  };

    return(
    <View style={styles.container}>
   
      <Text style={styles.title}> Conversor de Temperatura</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um valor em Celsius"
        keyboardType="numeric"
        value={valor1}
        onChangeText={(text) => setValor1(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={calcular1}
      >
        <Text style={styles.buttonText}>Converter para Fahrenheit</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Resultado: {resultadoC}</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um valor em Fahrenheit "
        keyboardType="numeric"
        value={valor2}
        onChangeText={(text) => setValor2(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={calcular2}
      >
        <Text style={styles.buttonText}>Converter para Celsius</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultadoF}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 186,
    height: 271,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
});