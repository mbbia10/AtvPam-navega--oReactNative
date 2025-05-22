import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para o Inicio"
          onPress={() => navigation.navigate("Inicio")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para o Perfil"
          onPress={() => navigation.navigate("Perfil")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Cor de fundo da tela
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#e8f0ef", // Cor de fundo do container do botão
    margin: 10,
    width: windowWidth * 0.5, // 50% da largura da tela
    borderRadius: 5,
  },
});
