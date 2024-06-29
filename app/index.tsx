import { Link } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import AppContext from "./AppContext";

const HomePage = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bienvenido a la App</Text>
      <Text style={styles.subHeader}>Dotacion Civil</Text>
      
      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.button}>
          <Link href="/users/Prueba">
            <Text style={styles.buttonText}>Comenzar</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#a8dadc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 40,
  },
  navigationContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomePage;
