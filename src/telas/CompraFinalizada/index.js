import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacityComponent, TouchableOpacity } from "react-native";
import VoltarSVG from '../../assets/voltar.svg'
import sucesso from '../../assets/sucesso.png'
import { useNavigation, useRoute } from "@react-navigation/native";
import useTextos from "../../hooks/useTextos";
import Texto from "../../componentes/Texto";


export default function CompraFinalizada() {
    const navigation = useNavigation();
    const route = useRoute();
    const { nome } = route.params
    const { tituloProdutores, mensagemCompra } = useTextos();
    const mensagemFinal = mensagemCompra.replace("$NOME", nome)

    return (
        <View style={estilos.container}>
            <Header />

            <Image source={sucesso}></Image>

            <Text style={estilos.textos}>
                {mensagemFinal}
            </Text>
        </View >

    )
}

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={estilos.header}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <VoltarSVG style={estilos.icon} />
            </TouchableOpacity>
            <Texto style={estilos.text} >Pedido feito com sucesso!</Texto>
        </View>
    )
}

const estilos = StyleSheet.create(
    {
        container: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center"
        },
        header: {
            width: "100%",
            height: "58px",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexDirection: 'row',
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
        },
        icon: {
            width: 24,
            height: 24,
        },
        text: {
            width: "219px",
            height: "26px",
            paddingLeft: 32,
            fontSize: 24
        },
        textos: {
            alignSelf: "flex-start",
            paddingHorizontal: 16,
            fontSize: 26,
            fontWeight: "700",
            lineHeight: 42
        }
    }
)