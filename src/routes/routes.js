import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { loginContext } from "../Context/loginContext";

const TabNav = createBottomTabNavigator();
const AppStack = createStackNavigator();

import Home from "../pages/Home";
import Help from "../pages/Help";
import Account from "../pages/Account";
import Cadastro from "../pages/Cadastro";
import Favorites from "../pages/Favorites";
import ProfCards from "../pages/ProfCards";
import ProfInfo from "../pages/ProfInfo";
import Search from "../pages/Search";

function StackRoutes() {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
        >
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Register" component={Cadastro} />
            <AppStack.Screen name="ProfInfo" component={ProfInfo} />
            <AppStack.Screen name="Card" component={ProfCards} />
            <AppStack.Screen name="Search" component={Search} />
            <AppStack.Screen name="ProfCards" component={ProfCards} />
        </AppStack.Navigator>
    );
}

export default function routes() {
    const { logged } = useContext(loginContext);
    return (
        <NavigationContainer>
            <TabNav.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Help Me") {
                            iconName = focused
                                ? "help-circle"
                                : "help-circle-outline";
                        } else if (route.name === "Conta") {
                            iconName = focused ? "account" : "account-outline";
                        } else if (route.name === "Favoritos") {
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
                <TabNav.Screen name="Home" component={StackRoutes} />
                {logged && <TabNav.Screen name="Favoritos" component={Favorites} />}
                {logged && <TabNav.Screen name="Conta" component={Account} />}
                <TabNav.Screen name="Help Me" component={Help} />
                {/* <TabNav.Screen name="Card" component={ProfCards} /> */}
            </TabNav.Navigator>
        </NavigationContainer>
    );
}
