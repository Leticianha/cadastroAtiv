import React, { useCallback, useState } from 'react';
import { StyleSheet, StatusBar, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [data, setData] = useState('');
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  const [fontsLoaded] = useFonts({
    'Bochan': require('./assets/fonts/Bochan Serif.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar barStyle="light-content" backgroundColor="#0F224A" />

      <View style={styles.header}>
        <View style={styles.boxSerie}>
          {/* colocar onpress para voltar a página */}
          <TouchableOpacity>
            <Image style={styles.voltar} source={require('./assets/iconeVoltar.png')} />
          </TouchableOpacity>
          <View style={styles.linha}></View>
          <Text style={styles.serie}>1 ano B</Text>
        </View>
        <View style={styles.boxCaledanrio}>
          <Image style={styles.calendario} source={require('./assets/iconeCalendario.png')} />
        </View>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.conteudoTitulo}>Inserir Atividades</Text>
        <Text style={styles.conteudoTexto}>Insira as atividades relacionadas a essa turma.</Text>

        <View style={styles.containerInput}>
          <View style={styles.boxInput}>
            <Image style={styles.iconesInput} source={require('./assets/iconeCalendarioAzul.png')} />
            <View style={styles.linhaInput}></View>
            <TextInput
              style={styles.input}
              placeholder="Data"
              placeholderTextColor="#607D8B"
              value={data}
              onChangeText={setData}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F224A',
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70
  },
  boxSerie: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderColor: 'white',
    padding: 15,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    width: 250,
    borderLeftWidth: 0,
    borderRightWidth: 1.5,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    paddingLeft: 45
  },
  voltar: {
    height: 30,
    width: 20,
    borderRadius: 15
  },
  linha: {
    backgroundColor: 'white',
    width: 2,
    height: 33
  },
  serie: {
    fontFamily: 'Bochan',
    color: 'white',
    fontSize: 22
  },
  boxCaledanrio: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1.5
  },
  calendario: {
    height: 30,
    width: 30
  },
  conteudo: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 60,
    padding: 40
  },
  conteudoTitulo: {
    fontFamily: 'Bochan',
    color: '#0F224A',
    fontSize: 24,
    marginBottom: 20,
  },
  conteudoTexto: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17.5,
    color: '#0F224A',
    width: 300
  },
  boxInput: {
    backgroundColor: '#EAF1FF',
    flexDirection: 'row',
    gap: 15,
    padding: 15,
    borderRadius: 15
  },
  linhaInput: {
    backgroundColor: '#0F224A',
    width: 4,
    height: 30,
    borderRadius: 20
  },
  iconesInput: {
    height: 30,
    width: 30
  },
  input: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#72809C',
    width: 235
  }
});
