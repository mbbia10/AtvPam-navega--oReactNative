import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Fundo galáctico */}
      <View style={styles.overlay1} />
      <View style={styles.overlay2} />
      <View style={styles.overlay3} />

      {/* Estrelas */}
      {[...Array(80)].map((_, i) => (
        <View
          key={i}
          style={{
            position: "absolute",
            top: Math.random() * windowHeight,
            left: Math.random() * windowWidth,
            width: 2,
            height: 2,
            borderRadius: 1,
            backgroundColor: "white",
            opacity: Math.random(),
          }}
        />
      ))}

      {}
      <Text style={styles.title}>🚀 Cadastro</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome de Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome de Usuário"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Confirme sua Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          secureTextEntry
          placeholderTextColor="#aaa"
        />
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </Pressable>

      <Text style={styles.subtitle}>Já tem uma conta?</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Ir para Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  overlay1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#1a0033",
    opacity: 0.6,
  },
  overlay2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#330066",
    opacity: 0.3,
  },
  overlay3: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#660099",
    opacity: 0.1,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 30,
    fontWeight: "bold",
    textShadowColor: "#aa00ff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    marginTop: 15,
    color: "#eee",
    fontSize: 16,
  },
  label: {
    color: "#eee",
    marginBottom: 5,
    fontWeight: "600",
  },
  inputContainer: {
    width: windowWidth * 0.85,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#222",
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    color: "#fff",
  },
  button: {
    backgroundColor: "#a259ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: windowWidth * 0.6,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#fff",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
});
