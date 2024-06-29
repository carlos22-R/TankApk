import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput , ScrollView} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import datosJson from '../../Data/Datos copy.json';

const Prueba = () => {
  const [departamento, setDepartamento] = useState(null);
  const [municipio, setMunicipio] = useState(null);
  const [zonaPoblacional, setZonaPoblacional] = useState(null);
  const [departamentosData, setDepartamentosData] = useState([]);
  const [municipiosData, setMunicipiosData] = useState([]);
  const [tasaCrecimiento, setTasaCrecimiento] = useState(null);
  const [tasaPoblacionalInput, setTasaPoblacionalInput] = useState('');
  const [numLotes, setNumLotes] = useState('');
  const [numPersonasPorLote, setNumPersonasPorLote] = useState('');
  const [numHabitantes, setNumHabitantes] = useState('');
  const [nAnios,setnAnios] = useState('');
  const [numHabitantesFuturos, setNumHabitantesFuturos] = useState('');


  useEffect(() => {
    const loadDepartamentos = async () => {
      try {
        setDepartamentosData(datosJson.departamentos);
      } catch (error) {
        console.error('Error loading departamentos data', error);
      }
    };

    loadDepartamentos();
  }, []);

  useEffect(() => {
    if (departamento && departamentosData.length > 0) {
      const selectedDepartamento = departamentosData.find(depto => depto.nombre === departamento);
      if (selectedDepartamento) {
        setMunicipiosData(selectedDepartamento.municipios || []);
        setTasaCrecimiento(selectedDepartamento.tasa_poblacional || null);
      } else {
        setMunicipiosData([]);
        setTasaCrecimiento(null);
      }
    } else {
      setMunicipiosData([]);
      setTasaCrecimiento(null);
    }
  }, [departamento, departamentosData]);

  useEffect(() => {
    if (municipio) {
      const selectedMunicipio = municipiosData.find(muni => muni.nombre === municipio);
      if (selectedMunicipio) {
        setTasaPoblacionalInput(selectedMunicipio.tasa_poblacional.toString() || '');
      }
    } else {
      setTasaPoblacionalInput('');
    }
  }, [municipio, municipiosData]);

  useEffect(() => {
    const lotes = parseInt(numLotes);
    const personasPorLote = parseInt(numPersonasPorLote);

    if (!isNaN(lotes) && !isNaN(personasPorLote)) {
      setNumHabitantes((lotes * personasPorLote).toString());
    } else {
      setNumHabitantes('');
    }
  }, [numLotes, numPersonasPorLote]);

    useEffect(() => {
      const habitantesActuales = parseInt(numHabitantes);
      const habitantesFuturos = parseInt(numHabitantesFuturos);
      const numeroAnios = parseInt(nAnios);
      const tasadecrecimiento = parseFloat(tasaPoblacionalInput);

      if (!isNaN(habitantesActuales) && !isNaN(numeroAnios) && !isNaN(tasadecrecimiento)) {
        if(habitantesActuales>=10000){
          //setNumHabitantesFuturos((habitantesActuales*(1+(tasadecrecimiento/100))^numeroAnios).toString());
          const resultado = habitantesActuales * ((1 + (tasadecrecimiento / 100)) ^ numeroAnios);
          console.log(habitantesActuales, "tasa de crecimiento:" + tasadecrecimiento,numeroAnios);
          console.log(resultado);
          setNumHabitantesFuturos(Math.round(resultado).toString());
        }
        else{
          const resultado = habitantesActuales * (1 + ((tasadecrecimiento / 100) * numeroAnios));
          console.log(habitantesActuales, "tasa de crecimiento:" + tasadecrecimiento,numeroAnios);
          console.log(resultado);
          setNumHabitantesFuturos(Math.round(resultado).toString());
        }
      } else {
        setNumHabitantesFuturos('');
      }
    }, [nAnios]);

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
            setDepartamento(item.value);
            setMunicipio(null);
            setTasaPoblacionalInput('');
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
          data={municipiosData.map(municipio => ({
            label: municipio.nombre,
            value: municipio.nombre,
            tasa_poblacional: municipio.tasa_poblacional
          }))}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!municipio ? 'Selecciona municipio' : '...'}
          searchPlaceholder="Buscar..."
          value={municipio}
          onChange={item => {
            setMunicipio(item.value);
            setTasaCrecimiento(item.tasa_poblacional);
          }}
          renderItem={item => (
            <View style={styles.dropdownItem}>
              <Text>{item.label}</Text>
            </View>
          )}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={municipio ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Tasa Poblacional:</Text>
          <TextInput
            style={[styles.input, styles.dropdown]}
            value={tasaPoblacionalInput}
            editable={false}
          />
        </View>
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

  const renderPoblacionActualSection = () => {
    return (
      <View>
        <Text style={styles.sectionTitle}>Población Actual</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.textInput]}
            value={numLotes}
            onChangeText={setNumLotes}
            keyboardType="numeric"
            placeholder="# de lotes"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.textInput]}
            value={numPersonasPorLote}
            onChangeText={setNumPersonasPorLote}
            keyboardType="numeric"
            placeholder="# de personas por lote"
            placeholderTextColor="gray"
          />
        </View>
        {/* ///////////input calculado /////////////////*/}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.textInput]}
            value={numHabitantes}
            editable={false}
            placeholder="# de habitantes"
            placeholderTextColor="gray"
          />
        </View>
      </View>
    );
  };
  const renderPoblacionFuturaSection = () =>{
    return (
      <View>
      <Text style={styles.sectionTitle}>Población Futura</Text>
      <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.textInput]}
            value={nAnios}
            onChangeText={setnAnios}
            keyboardType="numeric"
            placeholder="n(años)"
            placeholderTextColor="gray"
          />
        </View>
      <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.textInput]}
            value={numHabitantesFuturos}
            editable={false}
            placeholder="# de habitantes futuros"
            placeholderTextColor="gray"
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {renderDepartamentosDropdown()}
      {renderMunicipiosDropdown()}
      {renderZonaPoblacionalDropdown()}
      {renderPoblacionActualSection()}
      {renderPoblacionFuturaSection()}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16, // Espacio inferior opcional para separar del contenido siguiente
  },  
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  dropdownItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputLabel: {
    marginRight: 8,
    fontSize: 16,
    color: 'black',
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: 'black',
    fontSize: 16,
  },
  textInput: {
    marginBottom: 0, // Remove marginBottom for text inputs in Población Actual
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Prueba;
