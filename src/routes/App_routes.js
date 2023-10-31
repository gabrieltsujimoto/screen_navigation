import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Produtor_routes from "./Produtor_routes"
import MelhoresProdutores_routes from './MelhoresProdutores_routes';
import Hearticon from '../assets/coracao.svg';
import Homeicon from '../assets/home.svg'

const Tab = createBottomTabNavigator();

export default function App_routes() {
    return (
        <>
            <NavigationContainer >
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarActiveTintColor: '#2a9f85',
                        tabBarInactiveTintColor: '#c7c7c7',
                        tabBarLabelStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                        },
                        tabBarIconStyle: {
                            border: "1px solid black"
                        },
                        tabBarIcon: ({ color }) => {
                            let Icon = Homeicon;
                            if (route.name === "Melhores Produtores") {
                                Icon = Hearticon
                            }
                            return <Icon color={color} />
                        }
                    })}>
                    <Tab.Screen name="Home" component={Produtor_routes} />
                    <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores_routes} />
                </Tab.Navigator>
            </NavigationContainer >
        </>

    )
}