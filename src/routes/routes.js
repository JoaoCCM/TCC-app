import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabNav = createBottomTabNavigator();

import Home from "../pages/Home";
import Help from "../pages/Help";
import Account from "../pages/Account";
import Cadastro from "../pages/Cadastro";
import Favorites from "../pages/Favorites";


export default function routes() {
    return (
        <NavigationContainer>
            <TabNav.Navigator

                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Help") {
                            iconName = focused ? "help-circle" : "help-circle-outline";
                        } else if (route.name === "Account") {
                            iconName = focused ? "account" : "account-outline";
                        } else if (route.name === 'Favorites') {
                            iconName = focused ? "cards-heart" : "heart-outline";
                        }

                        // You can return any component that you like here!
                        return (
                            <MaterialCommunityIcons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    keyboardHidesTabBar: true,
                    activeTintColor: "black",
                    inactiveTintColor: "gray",
                }}
            >
                {/* <TabNav.Screen name="Cadastro" component={Cadastro} /> */}
                <TabNav.Screen name="Home" component={Home} />
                <TabNav.Screen name="Favorites" component={Favorites} />
                <TabNav.Screen name="Account" component={Account} />
                <TabNav.Screen name="Help" component={Help} />
            </TabNav.Navigator>
        </NavigationContainer>
    );
}
