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

  useEffect(() => {
    // Cargar datos del JSON cuando el componente se monta
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

  useEffect(() => {
    // Actualizar municipios y tasa de crecimiento cuando se selecciona un departamento
    if (departamento && departamentosData.length > 0) {
      console.log('Departamento seleccionado:', departamento);
      console.log('Cargando municipios y tasa de crecimiento');
      const selectedDepartamento = departamentosData.find(depto => depto.nombre === departamento);
      if (selectedDepartamento) {
        setMunicipiosData(selectedDepartamento.municipios || []);
        setTasaCrecimiento(selectedDepartamento.tasaCrecimiento || null);
        console.log('Municipios cargados:', selectedDepartamento.municipios);
      } else {
        // Si no se encuentra el departamento seleccionado, reiniciar los datos de municipios y tasa de crecimiento
        setMunicipiosData([]);
        setTasaCrecimiento(null);
      }
    } else {
      // Si no hay departamento seleccionado, reiniciar los datos de municipios y tasa de crecimiento
      setMunicipiosData([]);
      setTasaCrecimiento(null);
      console.log('No se cargan municipios');
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
          data={departamentosData.map(depto => ({ label: depto.nombre, value: depto.nombre }))}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!departamento ? 'Selecciona departamento' : '...'}
          searchPlaceholder="Buscar..."
          value={departamento}
          onChange={item => {
            console.log('Departamento cambiado a:', item.value);
            setDepartamento(item.value);
            setMunicipio(null); // Resetear el municipio seleccionado al cambiar el departamento
          }}
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
          data={municipiosData.map(municipio => ({ label: municipio.nombre, value: municipio.nombre }))}
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
