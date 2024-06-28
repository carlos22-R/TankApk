import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import tw from 'twrnc';
const resultado = () => {
    const [horasBombeo, setHorasBombeo] = useState('12');
    const[valorinicil,setValor] =useState({
        valor:0.04,
        valor2:41.61
    })
    const [valorA,setValorA]= useState({
        qmaxD:(1.2*valorinicil.valor).toFixed(2),
        qmaxH:(2.4*valorinicil.valor).toFixed(2),
        qminH:(0.3*valorinicil.valor).toFixed(2)
    })
    const [valorB,setValorB]=useState({
        qmaxD:(1.2*valorinicil.valor2).toFixed(2),
        qmaxH:(2.4*valorinicil.valor2).toFixed(2),
        qminH:(0.3*valorinicil.valor2).toFixed(2)
    })
  return (
    <ScrollView contentContainerStyle={tw`p-4 items-center`}>
    <View style={tw`w-full max-w-md border border-black`}>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-gray-300 font-bold text-center p-2`}>VARIACIONES DE CONSUMO PARA POBLACION ACTUAL</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-pink-200 text-center p-2`}>Q medio diario</Text>
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value={valorinicil.valor.toString()} />
        <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>lts/s</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-blue-200 text-center p-2`}>Q max diario</Text>
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="K1" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="1.2" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value={valorA.qmaxD.toString()} />
        <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>lts/s</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-blue-200 text-center p-2`}>Q max horario</Text>
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="K2" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="2.4" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value={valorA.qmaxH.toString()} />
        <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>lts/s</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-blue-200 text-center p-2`}>Q min horario</Text>
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="K3" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="0.3" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value={valorA.qminH.toString()} />
        <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>lts/s</Text>
      </View>
    </View>
     <View style={tw`w-full max-w-md border border-black m-3`}>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-gray-300 font-bold text-center p-2`}>VARIACIONES DE CONSUMO PARA POBLACION FUTURA</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-pink-200 text-center p-2`}>Q medio diario</Text>
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value={valorinicil.valor.toString()} />
        <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>lts/s</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-blue-200 text-center p-2`}>Q max diario</Text>
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="K1" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="1.2" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value={valorB.qmaxD.toString()} />
        <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>lts/s</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-blue-200 text-center p-2`}>Q max horario</Text>
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="K2" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="2.4" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value={valorB.qmaxH.toString()} />
        <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>lts/s</Text>
      </View>
      <View style={tw`flex-row`}>
        <Text style={tw`flex-1 bg-blue-200 text-center p-2`}>Q min horario</Text>
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="K3" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value="0.3" />
        <TextInput style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} value={valorB.qminH.toString()} />
        <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>lts/s</Text>
      </View>
    </View>
    <View style={tw`w-full max-w-md border border-black`}>
        <View style={tw`flex-row`}>
          <Text style={tw`flex-1 bg-gray-300 font-bold text-center p-2`}>DISEÑO DE VOLUMEN DE TANQUE DE ALMACENAMIENTO</Text>
        </View>
        <View style={tw`flex-row`}>
          <Text style={tw`flex-1 bg-pink-200 text-center p-2`}>Vtanque = V1 + V2 + Vincendios</Text>
          <Text style={tw`flex-1 bg-gray-300 text-center p-2`}>horas de bombeo</Text>
          <TextInput 
            style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} 
            value={horasBombeo} 
            onChangeText={setHorasBombeo} 
            keyboardType="numeric"
          />
    </View>
        </View>
        <View style={tw`w-full max-w-md border border-black m-2`}>
        <View style={tw`flex-row `}>
          <Text style={tw`flex-1 bg-pink-200 text-center p-2`}>V1 = 20</Text>
          <Text style={tw`flex-1 bg-blue-200 text-center p-2`}>V2 = 10</Text>
          
          <Text style={tw`flex-1 bg-blue-200 text-center p-1`}>Vincendios = 90</Text>
        </View>
        </View>
        <View style={tw`w-full max-w-md border border-black m-2`}>
        <View style={tw`flex-row`}>
          <Text style={tw`flex-1 bg-pink-200 text-center p-2`}>Vtanque =</Text>
          {/* <TextInput 
            style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} 
            value="4000" 
             
          /> */}
          <Text style={tw`bg-yellow-200 text-center p-1 border border-black`}>Vtanque m3</Text>
          
        </View>
        </View>
        <View style={tw`w-full max-w-md border border-black m-2`}>
        <View style={tw`flex-row`}>
          <Text style={tw`flex-1 bg-pink-200 text-center p-2`}>Volumen de diseño de tanque =</Text>
          {/* <TextInput 
            style={tw`flex-1 bg-yellow-200 text-center p-2 border border-black`} 
            value="4003" 
             
          /> */}
          <Text style={tw`bg-yellow-200 text-center p-1 border border-black`}>4003000 m3</Text>
          
        </View>
        </View>
      
  </ScrollView>
  
);
};


export default resultado