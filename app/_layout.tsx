import { Stack } from "expo-router"

const RootLayout=()=>{
    return(
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="users/[id].ts"/>
            <Stack.Screen name="users/Prueba"/>
        </Stack>
    )
}
export default RootLayout;