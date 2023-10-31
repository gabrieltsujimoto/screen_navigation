import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacityComponent, TouchableOpacity, Button } from "react-native";
import VoltarSVG from '../../assets/voltar.svg'
import sucesso from '../../assets/sucesso.png'
import { useNavigation, useRoute } from "@react-navigation/native";
import useTextos from "../../hooks/useTextos";
import Texto from "../../componentes/Texto";
import MelhoresProdutores from "../MelhoresProdutores";


export default function CompraFinalizada() {
    const navigation = useNavigation();
    const route = useRoute();
    const { compra } = route.params
    const { tituloProdutores, mensagemCompra } = useTextos();
    mensagemFinal = mensagemCompra?.replace("$NOME", compra.nome)
    return (
        <View style={estilos.container}>
            <Header />
            <Image style={estilos.containerImage} source={sucesso} />
            <View style={estilos.containerActions}>
                <View style={{ paddingBottom: 16 }}>
                    <Text style={estilos.textos}>Parabéns!</Text>
                    <Text style={estilos.p}>{mensagemFinal}</Text>
                </View>
                <TouchableOpacity style={estilos.btnHome} onPress={navigation.navigate("HomeScreen")}>
                    <Texto style={{ color: "#fff", fontSize: 16, lineHeight: 26, fontWeight: "700" }}>
                        Voltar a Home
                    </Texto>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Texto style={estilos.back}>
                        Voltar ao Produtor
                    </Texto>
                </TouchableOpacity>
            </View>
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
        },
        containerImage: {
            height: 351,
            width: "100%",
            objectFit: "fill"
        },
        header: {
            width: "100%",
            height: 58,
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 1,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        },
        icon: {
            width: 24,
            height: 24,
        },
        text: {
            width: "219px",
            height: "26px",
            fontSize: 16,
            paddingLeft: 16,
            fontWeight: "bold",
            letterSpacing: 1,
        },
        textos: {
            alignSelf: "flex-start",
            fontSize: 26,
            fontWeight: "700",
            letterSpacing: 1,
            lineHeight: 42
        },
        p: {
            width: 328,
            fontSize: 16,
            lineHeight: 26,
            fontWeight: "300",
            color: "#A3A3A3"
        },
        btnHome: {
            width: 328,
            padding: 16,
            gap: 10,
            display: "flex",
            alignItems: "center",
            borderRadius: 6,
            backgroundColor: "#2A9F85",
            marginBottom: 16,
        },
        back: {
            fontWeight: "bold",
            letterSpacing: 1.2
        },
        containerActions: {
            paddingHorizontal: 18,
            width: "100%",
            alignItems: "center"
        }
    }
)