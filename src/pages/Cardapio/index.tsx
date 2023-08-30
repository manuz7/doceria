import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';

import topo from '../../../assets/topo.png';



const width = Dimensions.get('screen').width;

export default function Doceria (){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style= {estilos.titulo}>Detalhe da Doceria</Text>
    <View style= {estilos.doceria}>
        <Text style= {estilos.titulodoceria}>Carrinho de Compras</Text>
        <View style=  {estilos.doceria}>
        <Image style= {estilos.imagemDoceria} source={logo}/>
        <Text style= {estilos.nomeDoceria}>Fazenda Etec Cidade do Livro</Text>
        </View>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente 
            da fazenda direto para sua cozinha
        </Text>
        <Text>R$ 40,00</Text>
       </View>
       </>
}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 26,
        width: "100%",
        textAlign: "center",
        color: "white",
        position: "absolute",
        padding: 16

    },
       titulodoceria:  {
           fontSize : 26,
           lineHeight: 42,
           color: "#464646"
        
       },

       doceria: {
           paddingVertical: 8,
           paddingHorizontal: 16
       },

       nomeDoceria: {
         fontSize: 16,
         lineHeight: 26,
         marginLeft: 12,
         fontWeight: "bold"
        },

        imagemDoceria: {
            width: 32,
            height: 32
        },

        Doceria:{
            flexDirection: "row",
            paddingVertical: 12
        },
        descricao:{
            color: "A3A3A3",
            fontStyle: "italic"
        },

        preco: {
           fontSize: 26,
           lineHeight: 42,
           color: "#2A9F85",
           marginTop: 8

        }
  })