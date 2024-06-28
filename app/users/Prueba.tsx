import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import datosJson from '../../Data/Datos copy.json'; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas

const Prueba = () => {
  const [departamento, setDepartamento] = useState(null);
  const [municipio, setMunicipio] = useState(null);
  const [zonaPoblacional, setZonaPoblacional] = useState(null);
  const [departamentosData, setDepartamentosData] = useState([]);
  const [municipiosData, setMunicipiosData] = useState([]);
  const [tasaCrecimiento, setTasaCrecimiento] = useState(null);

// Cargar datos del JSON cuando el componente se monta
useEffect(() => {
  const loadDepartamentos = async () => {
    try {
      // Simulamos una carga asíncrona
      setDepartamentosData(datosJson.departamentos);
      console.log('Departamentos cargados:', datosJson.departamentos);
    } catch (error) {
      console.error('Error loading departamentos data', error);
    }
  };

  loadDepartamentos();
}, []);

// Actualizar municipios y tasa de crecimiento cuando se selecciona un departamento
useEffect(() => {
  if (departamentosData.length > 0) {
    const selectedDepartamento = departamentosData.find(depto => depto.id === departamento);
    if (selectedDepartamento) {
      setMunicipiosData(selectedDepartamento.municipios || []);
      setTasaCrecimiento(selectedDepartamento.tasaCrecimiento || null);
    } else {
      setMunicipiosData([]);
      setTasaCrecimiento(null);
    }
  } else {
    setMunicipiosData([]);
    setTasaCrecimiento(null);
  }
}, [departamento, departamentosData]);


  const renderDepartamentosDropdown = () => {
    return (
      <View>
        <Text>Departamento</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={departamentosData.map(depto => ({ label: depto.nombre, value: depto.id }))}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!departamento ? 'Selecciona departamento' : '...'}
          searchPlaceholder="Buscar..."
          value={departamento}
          onChange={item => setDepartamento(item.value)}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={departamento ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  const renderMunicipiosDropdown = () => {
    return (
      <View>
        <Text>Municipio</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={municipiosData.map(municipio => ({ label: municipio.nombre, value: municipio.id }))}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!municipio ? 'Selecciona municipio' : '...'}
          searchPlaceholder="Buscar..."
          value={municipio}
          onChange={item => setMunicipio(item.value)}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={municipio ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  const renderZonaPoblacionalDropdown = () => {
    return (
      <View>
        <Text>Zona Poblacional</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={[
            { label: 'Urbano', value: '1' },
            { label: 'Rural', value: '2' }
          ]}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!zonaPoblacional ? 'Selecciona zona poblacional' : '...'}
          searchPlaceholder="Buscar..."
          value={zonaPoblacional}
          onChange={item => setZonaPoblacional(item.value)}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={zonaPoblacional ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderDepartamentosDropdown()}
      {renderMunicipiosDropdown()}
      {renderZonaPoblacionalDropdown()}
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
