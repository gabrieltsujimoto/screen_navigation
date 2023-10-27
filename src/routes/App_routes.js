import React from 'react';
import MelhoresProdutores from '../../src/telas/MelhoresProdutores';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Produtor_routes from "./Produtor_routes"

const Tab = createBottomTabNavigator();

export default function App_Routes() {
    return (
        <>
            <NavigationContainer >
                <Tab.Navigator>
                    <Tab.Screen name="Produtor" component={Produtor_routes} />
                    <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
                </Tab.Navigator>
            </NavigationContainer>
        </>

    )
}