import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Produtor_routes from "./Produtor_routes"
import MelhoresProdutores_routes from './MelhoresProdutores_routes';

const Tab = createBottomTabNavigator();

export default function App_routes() {
    return (
        <>
            <NavigationContainer >
                <Tab.Navigator screenOptions={{headerShown:false} }>
                    <Tab.Screen name="Home" component={Produtor_routes} />
                    <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores_routes} />
                </Tab.Navigator>
            </NavigationContainer>
        </>

    )
}