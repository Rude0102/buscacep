import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import firebase from '../../firebaseconnection';

export default function Historico() {
  const [history, setHistory] = useState([])
  const database = firebase.firestore()

  useEffect(() => {
    database.collection("dados").orderBy("data_hora", "desc").onSnapshot((query) => {
      const list = []
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id})
      })
      setHistory(list)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Histórico!</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => {
          return(
            <View>
              <Text>{item.cep}</Text>
              <Text>{item.localidade}</Text>
              <Text>{data.cep}</Text>  
              <Text>{data.localidade}</Text>
              <Text>{data.bairro}</Text>
              <Text>{data.logradouro}</Text>
              <Text>{data.uf}</Text>
              <Text>{data.complemento}</Text>
              <Text>{data.ddd}</Text>
              <Text>{data.ibge}</Text>
              <Text>{data.siafi}</Text>
            
            </View>
          )
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: "bold",
    marginEnd: 170,
    height: 600,
},
  box:{
    marginTop: 10,
    top: -500,
    borderWidth: 1,
    backgroundColor: '#FFFF',
    textAlign: 'center',
    paddingHorizontal: 200,
    paddingVertical: 45,
    fontWeight: "bold",
    borderRadius: 8,
}, 
});
 