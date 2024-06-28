import { View, Text, TextInput, StyleSheet, FlatList ,useWindowDimensions,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import tw from 'twrnc';
import { useContext } from "react";
import AppContext from "../AppContext";
const initialData = [
    { tipo: 'Locales comerciales', existencia: 'NO', dotacion: 20, cantidad: 0, subtotal: 0 },
    { tipo: 'Hospitales', existencia: 'SI', dotacion: 600, cantidad: 1, subtotal: 600 },
    { tipo: 'Vivienda Media', existencia: 'SI', dotacion: 150, cantidad: 1, subtotal: 150 },
    { tipo: 'Oficinas', existencia: 'SI', dotacion: 50, cantidad: 6, subtotal: 300 },
    { tipo: 'Pension', existencia:'NO', dotacion:350,cantidad: 0, subtotal:0},
    {tipo: 'Restaurantes', existencia:'NO', dotacion:50,cantidad: 0, subtotal:0},
    {tipo: 'Externos', existencia:'SI', dotacion:40,cantidad: 3, subtotal:120},
    {tipo: 'Internados', existencia:'NO', dotacion:200,cantidad: 0, subtotal:0},
    {tipo: 'Personas no residentes', existencia:'NO', dotacion:50,cantidad: 0, subtotal:0},
    {tipo: 'Medicas', existencia:'NO', dotacion:500,cantidad: 0, subtotal:0},
    {tipo: 'Dentales', existencia:'NO', dotacion:1000,cantidad: 0, subtotal:0},
    {tipo: 'Minima', existencia:'NO', dotacion:0,cantidad: 0, subtotal:0},
    {tipo: 'Media', existencia:'NO', dotacion:150,cantidad: 1, subtotal:150},
    {tipo: 'Alta', existencia:'NO', dotacion:0,cantidad: 0, subtotal:0},
    {tipo:'Mercados,puestos', existencia:'SI', dotacion:15,cantidad: 50, subtotal:750},
    {tipo: 'Cines,teatros', existencia:'SI', dotacion:3,cantidad: 60, subtotal:180},
    {tipo: 'Bodegas', existencia:'SI', dotacion:20,cantidad: 80, subtotal:1600},
    {tipo: 'Gasolinera', existencia:'NO', dotacion:300,cantidad: 0, subtotal:0},
    {tipo: 'Estacionamiento', existencia:'NO', dotacion:2,cantidad: 0, subtotal:0},
    {tipo: 'Restaurante', existencia:'NO', dotacion:50,cantidad: 0, subtotal:0},
    {tipo: 'Industria', existencia:'NO', dotacion:80,cantidad: 0, subtotal:0},
    {tipo: 'Jardines', existencia:'NO', dotacion:1.5,cantidad: 0, subtotal:0},
    {tipo: 'Lavanderias', existencia:'NO', dotacion:50,cantidad: 0, subtotal:0},
    {tipo: 'Cantareras', existencia:'SI', dotacion:30,cantidad: 5, subtotal:150}
    // Añadir más filas según sea necesario
  ];
  const UserPage = () => {
    const [data, setData] = useState(initialData);
    const { width, height } = useWindowDimensions();
  
    const handleExistenciaChange = (index=0, value="") => {
      const newData = [...data];
    newData[index].existencia = value;
    if (value === 'SI') {
      newData[index].subtotal = newData[index].cantidad * newData[index].dotacion;
    } else {
      newData[index].subtotal = 0;
    }
    setData(newData);
    };
  
    const handleCantidadChange = (index=0, value="") => {
      const newData = [...data];
      newData[index].cantidad = parseInt(value) || 0;
      if (newData[index].existencia === 'SI') {
        newData[index].subtotal = newData[index].cantidad * newData[index].dotacion;
      } else {
        newData[index].subtotal = 0;
      }
      setData(newData);
    };
  
    const totalSubtotal = data.reduce((sum, row) => sum + row.subtotal, 0);
  
    const isPortrait = height >= width;
  
    return (
      <ScrollView horizontal={!isPortrait}>
        <View style={[tw`flex-1 p-4`, { width: isPortrait ? width : height }]}>
          <ScrollView>
            <View style={tw`flex-row justify-between items-center py-2 border-b border-gray-400`}>
              <Text style={tw`flex-1 px-2 font-bold text-center`}>Tipo</Text>
              <Text style={tw`flex-1 px-2 font-bold text-center`}>Existencia</Text>
              <Text style={tw`flex-1 px-2 font-bold text-center`}>Dotación</Text>
              <Text style={tw`flex-1 px-2 font-bold text-center`}>Cantidad</Text>
              <Text style={tw`flex-1 px-2 font-bold text-center`}>Subtotal</Text>
            </View>
            {data.map((item, index) => (
              <View key={index} style={tw`flex-row justify-between items-center py-2`}>
                <Text style={tw`flex-1 px-2 text-center`}>{item.tipo}</Text>
                <View style={[styles.pickerContainer, item.existencia === 'SI' ? styles.existenciaSI : styles.existenciaNO]}>
                <Picker
                  selectedValue={item.existencia}
                  style={tw`flex-1 h-10 ${item.existencia==='NO'?' bg-red':' bg-green'}`}
                  onValueChange={(value) => handleExistenciaChange(index, value)}
                >
                  <Picker.Item label="SI" value="SI" />
                  <Picker.Item label="NO" value="NO" />
                </Picker>
                </View>
                <Text style={tw`flex-1 px-2 text-center`}>{item.dotacion}</Text>
                <TextInput
                  style={[tw`px-2 text-center border border-gray-300`, { width: 50 }]} // Ajuste del ancho del input
                  keyboardType="numeric"
                  value={item.cantidad.toString()}
                  onChangeText={(value) => handleCantidadChange(index, value)}
                />
                <Text style={tw`flex-1 px-2 text-center`}>{item.subtotal}</Text>
              </View>
            ))}
            <View style={tw`flex-row justify-between items-center py-2 border-t border-gray-400 mt-2`}>
              <Text style={tw`text-lg font-bold`}>Total:</Text>
              <Text style={tw`text-lg font-bold`}>{totalSubtotal}</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
    },
    cell: {
      flex: 1,
      paddingHorizontal: 8,
    },
    pickerContainer: {
      flex: 1,
    },
    picker: {
      flex: 1,
      height: 40,
    },
    existenciaSI: {
      backgroundColor: 'green',
    },
    existenciaNO: {
      backgroundColor: 'red',
    },
    pickerItem: {
      fontSize: 10,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      borderTopWidth: 1,
      marginTop: 8,
    },
    totalLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    totalValue: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default UserPage;