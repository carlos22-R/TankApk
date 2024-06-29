import { Stack } from "expo-router"

import { AppProvider } from "./AppContext";
import { useState } from "react";
import { Header } from "react-native/Libraries/NewAppScreen";

const RootLayout=()=>{
    return(
       <AppProvider>
        <Stack>
            <Stack.Screen name="index" options={{headerTitle:"Inicio", headerStyle:{backgroundColor:"#1d3557"}, headerTintColor:"#fff"}}/>
            <Stack.Screen name="users/[id]" options={{headerTitle:"Inicio"}}/>
            <Stack.Screen name="users/Prueba" options={{headerTitle:"Poblaciones", headerStyle:{backgroundColor:"#1d3557"}, headerTintColor:"#fff"}}/>
            <Stack.Screen name="users/tabla" options={{headerTitle:"Tabla", headerStyle:{backgroundColor:"#1d3557"}, headerTintColor:"#fff"}}/>
            <Stack.Screen name="users/resultado" options={{headerTitle:"Resultado", headerStyle:{backgroundColor:"#1d3557"}, headerTintColor:"#fff"}}/>
        </Stack>
     </AppProvider>

    )
}
export default RootLayout;