import { Link } from "expo-router";
import { View , Text} from "react-native";

const HomePage =() =>{
  return (
    <View>
        <Text>Home Page</Text>
        <Link href="/users/1">Go to user 1 </Link>
        <Link href="/users/Prueba">Go to Prueba </Link>
    </View>
  )
}
export default HomePage;