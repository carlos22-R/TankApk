import { Link } from "expo-router";
import { View , Text,Button, TextInput} from "react-native";
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
      
    </View>
  )
}
export default HomePage;