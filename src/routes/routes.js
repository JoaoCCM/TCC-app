import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

const TabNav = createBottomTabNavigator();

import Home from "../pages/Home";
import Help from "../pages/Help";

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
                <TabNav.Screen name="Home" component={Home} />
                <TabNav.Screen name="Help" component={Help} />
            </TabNav.Navigator>
        </NavigationContainer>
    );
}
