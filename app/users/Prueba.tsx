import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const ZonaPoblacional=[
    {label: 'Urbano', value:'1'},
    {label: 'Rural', value:'2'}
];

const Prueba = () => {
  const [departamento, setDepartamento] = useState(null);
  const [municipio, setMunicipio] = useState(null);
  const [zonaPoblacional, setZonaPoblacional] = useState(null);
  const [isFocusDepartamento, setIsFocusDepartamento] = useState(false);
  const [isFocusMunicipio, setIsFocusMunicipio] = useState(false);
  const [isFocusZonaPoblacional, setIsFocusZonaPoblacional] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Departamento</Text>
      <Dropdown
        style={[styles.dropdown, isFocusDepartamento && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocusDepartamento ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={departamento}
        onFocus={() => setIsFocusDepartamento(true)}
        onBlur={() => setIsFocusDepartamento(false)}
        onChange={item => {
          setDepartamento(item.value);
          setIsFocusDepartamento(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocusDepartamento ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
      
      <Text>Municipio</Text>
      <Dropdown
        style={[styles.dropdown, isFocusMunicipio && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocusMunicipio ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={municipio}
        onFocus={() => setIsFocusMunicipio(true)}
        onBlur={() => setIsFocusMunicipio(false)}
        onChange={item => {
          setMunicipio(item.value);
          setIsFocusMunicipio(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocusMunicipio ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />

      <Text>Zona Poblacional</Text>
      <Dropdown
        style={[styles.dropdown, isFocusZonaPoblacional && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={ZonaPoblacional}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocusZonaPoblacional ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={zonaPoblacional}
        onFocus={() => setIsFocusZonaPoblacional(true)}
        onBlur={() => setIsFocusZonaPoblacional(false)}
        onChange={item => {
          setZonaPoblacional(item.value);
          setIsFocusZonaPoblacional(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocusZonaPoblacional ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default Prueba;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16, // Agrega un margen inferior para separar los dropdowns
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
