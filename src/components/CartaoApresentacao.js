import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const CartaoApresentacao = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
    </View>
  )
}

const styles = StyleSheet.create({
    // Container principal do cartão
    container: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4, 
        elevation: 5,
    },

    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margimBottom: 10,
    },

    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },

    descricao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10,
    },

    botao: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },

    botoesContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    botaoGithub: {
        backgroundColor: '#333',
    },

    botaoLinkedin: {
        backgroundColor: '#0077b5'
    },

    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

})

export default CartaoApresentacao