import { Link } from "expo-router";
import { View , Text,Button, TextInput, TouchableOpacity,StyleSheet} from "react-native";
import { useContext } from "react";
import AppContext from "./AppContext";
const HomePage =() =>{
  const { state, setState } = useContext(AppContext);
  const handleInputChange = (field="nombre", value="valor") => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return (
   
    <View>
        <Text>Home Page del usuario </Text>
        <Link href="/users/tabla">Go to user 1 </Link>
        <Link href="/users/Prueba">Go to Prueba </Link>
        <Link href="/users/resultado">Go to Resultado </Link>
        <View style={styles.containerb}>
        
        <TouchableOpacity style={styles.button} >
        <Link href="/users/Prueba"> 
          <Text style={styles.buttonText}>
            Comenzar</Text>
        </Link>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  containerb: {
  justifyContent: 'center',
  alignItems: 'flex-end',
  marginRight:10,
  marginBottom:10
  },

  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

});
export default HomePage;