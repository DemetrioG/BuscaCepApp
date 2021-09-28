import React, {useState, useRef} from 'react'
import {View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native'
import api from './src/services/api'
import styles from './GlobalStyle'

export default function App() {

  const [cep, setCep] = useState('')
  const [cepResponse, setCepResponse] = useState(null)
  const inputRef = useRef(null)

  function limpar() {
    setCep('')
    setCepResponse(null)
    inputRef.current.focus()
  }

  async function buscar() {
    if (cep == '') {
      alert('Digite um CEP válido.')
      setCep('')
      return
    }

    try {
      const response = await api.get(`${cep}/json`)
      setCepResponse(response.data)
      Keyboard.dismiss()
    }
    catch(error) {
      console.log('Error: ' + error)
    }
    
  }

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.txt}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 89026-110"
          value={cep}
          onChangeText={(text) => setCep(text)}
          keyboardType="numeric"
          ref={inputRef}
        />
        <View style={styles.viewBtn}>
          <TouchableOpacity style={[styles.btn, styles.btnBuscar]} onPress={buscar}>
            <Text style={styles.txtBtn}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnLimpar]} onPress={limpar}>
            <Text style={styles.txtBtn}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {cepResponse &&
          <View style={styles.viewResult}>
            <Text style={styles.item}>Endereço: {cepResponse.complemento == '' ? `${cepResponse.logradouro}` : `${cepResponse.logradouro} ${cepResponse.complemento}`} </Text>
            <Text style={styles.item}>Bairro: {cepResponse.bairro}</Text>
            <Text style={styles.item}>Cidade: {cepResponse.localidade}</Text>
            <Text style={styles.item}>UF: {cepResponse.uf}</Text>
            <Text style={styles.item}>DDD: {cepResponse.ddd}</Text>
          </View>
        }
        
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}