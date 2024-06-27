import { View, Text, TextInput, StyleSheet, FlatList ,useWindowDimensions,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import { useContext } from "react";
import AppContext from "../AppContext";
const initialData = [
    { tipo: 'Locales comerciales', existencia: 'NO', dotacion: 20, cantidad: 0, subtotal: 0 },
    { tipo: 'Hospitales', existencia: 'SI', dotacion: 600, cantidad: 1, subtotal: 600 },
    { tipo: 'Vivienda Media', existencia: 'SI', dotacion: 150, cantidad: 1, subtotal: 150 },
    { tipo: 'Oficinas', existencia: 'SI', dotacion: 50, cantidad: 6, subtotal: 300 },
    // Añadir más filas según sea necesario
  ];
const UserPage=()=>{
    const [data, setData] = useState(initialData);
    const { width, height } = useWindowDimensions();
  
    const handleExistenciaChange = (index=0, value="") => {
      const newData = [...data];
      newData[index].existencia = value;
      setData(newData);
    };
  
    const handleCantidadChange = (index=0, value="") => {
      const newData = [...data];
      newData[index].cantidad = parseInt(value) || 0;
      newData[index].subtotal = newData[index].cantidad * newData[index].dotacion;
      setData(newData);
    };
    
    const totalSubtotal = data.reduce((sum, row) => sum + row.subtotal, 0);
    return (
        <ScrollView horizontal>
          <View style={[styles.container, { width: Math.max(width, height) }]}>
            <ScrollView>
              <View style={styles.headerRow}>
                <Text style={styles.headerCell}>Tipo</Text>
                <Text style={styles.headerCell}>Existencia</Text>
                <Text style={styles.headerCell}>Dotación</Text>
                <Text style={styles.headerCell}>Cantidad</Text>
                <Text style={styles.headerCell}>Subtotal</Text>
              </View>
              {data.map((item, index) => (
                <View key={index} style={styles.row}>
                  <Text style={styles.cell}>{item.tipo}</Text>
                  <Picker
                    selectedValue={item.existencia}
                    style={styles.picker}
                    onValueChange={(value) => handleExistenciaChange(index, value)}
                  >
                    <Picker.Item label="SI" value="SI" />
                    <Picker.Item label="NO" value="NO" />
                  </Picker>
                  <Text style={styles.cell}>{item.dotacion}</Text>
                  <TextInput
                    style={styles.cell}
                    keyboardType="numeric"
                    value={item.cantidad.toString()}
                    onChangeText={(value) => handleCantidadChange(index, value)}
                  />
                  <Text style={styles.cell}>{item.subtotal}</Text>
                </View>
              ))}
              <View style={styles.footer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalValue}>{totalSubtotal}</Text>
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
        headerRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 8,
          borderBottomWidth: 1,
        },
        headerCell: {
          flex: 1,
          paddingHorizontal: 8,
          fontWeight: 'bold',
          textAlign: 'center',
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
          textAlign: 'center',
        },
        picker: {
          flex: 1,
          height: 40,
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