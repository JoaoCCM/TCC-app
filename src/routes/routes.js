import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

const TabNav = createBottomTabNavigator();

import Home from "../pages/Home";
import Help from "../pages/Help";
import Account from "../pages/Account";
import Cadastro from "../pages/Cadastro";
// import UserHome from "../pages/UserHome";

export default function routes() {
    return (
        <NavigationContainer>
            <TabNav.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home";
                        } else if (route.name === "Help") {
                            iconName = focused ? "help-circle" : "help-circle";
                        } else if (route.name === "Account") {
                            iconName = focused ? "user" : "user";
                        }

                        // You can return any component that you like here!
                        return (
                            <Feather
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "#6A82FB",
                    inactiveTintColor: "gray",
                }}
            >
                {/* <TabNav.Screen name="Cadastro" component={Cadastro} /> */}
                <TabNav.Screen name="Home" component={Home} />
                <TabNav.Screen name="Account" component={Account} />
                <TabNav.Screen name="Help" component={Help} />
            </TabNav.Navigator>
        </NavigationContainer>
    );
}
