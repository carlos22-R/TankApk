import { View,Text } from "react-native";
import { useContext } from "react";
import AppContext from "../AppContext";

const UserPage=()=>{
    const { state, setState } = useContext(AppContext);
    return <View><Text>User Page {state.Departamento}</Text></View>;
}
export default UserPage;