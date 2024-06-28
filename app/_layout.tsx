import { Stack } from "expo-router"

import { AppProvider } from "./AppContext";
import { useState } from "react";

const RootLayout=()=>{
    return(
       <AppProvider>
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="users/[id]"/>
            <Stack.Screen name="users/Prueba"/>
            <Stack.Screen name="users/tabla"/>
            <Stack.Screen name="users/resultado"/>
        </Stack>
     </AppProvider>

    )
}
export default RootLayout;