import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
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
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.row}>
              <Text style={styles.cell}>{item.tipo}</Text>
              <Picker
                selectedValue={item.existencia}
                style={styles.cell}
                onValueChange={(value: string | undefined) => handleExistenciaChange(index, value)}
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
          )}
          ListFooterComponent={
            <View style={styles.footer}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalValue}>{totalSubtotal}</Text>
            </View>
          }
        />
      </View>
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