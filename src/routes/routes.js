import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabNav = createBottomTabNavigator();
const AppStack = createStackNavigator();

import Home from "../pages/Home";
import Help from "../pages/Help";
import Account from "../pages/Account";
import Cadastro from "../pages/Cadastro";
import Favorites from "../pages/Favorites";
import ProfCards from "../pages/ProfCards";
import ProfInfo from "../pages/ProfInfo";

function TabNavigation() {
    return (

        <TabNav.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Help") {
                        iconName = focused
                            ? "help-circle"
                            : "help-circle-outline";
                    } else if (route.name === "Account") {
                        iconName = focused ? "account" : "account-outline";
                    } else if (route.name === "Favorites") {
                        iconName = focused
                            ? "cards-heart"
                            : "heart-outline";
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
                activeTintColor: "#333333",
                inactiveTintColor: "gray",
            }}
        >
            <TabNav.Screen name="Home" component={Home} />
            <TabNav.Screen name="Favorites" component={Favorites} />
            <TabNav.Screen name="Account" component={Account} />
            <TabNav.Screen name="Help" component={Help} />
            {/* <TabNav.Screen name="Card" component={ProfCards} /> */}
        </TabNav.Navigator>

    );
}

export default function routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                <AppStack.Screen name='Home' component={TabNavigation} />
                <AppStack.Screen name='Register' component={Cadastro} />
                <AppStack.Screen name='Card' component={ProfCards} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
