import React from 'react';
import {StatusBar, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons"

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

import {COLORS} from "./assets/constants/constants";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: COLORS.BROWN},
        headerTintColor: COLORS.WHITE,
        sceneContainerStyle: {backgroundColor: COLORS.WALNUT},
        drawerContentStyle: {backgroundColor: COLORS.BROWN},
        drawerInactiveTintColor: COLORS.WHITE,
        drawerActiveTintColor: COLORS.WALNUT,
        drawerActiveBackgroundColor: COLORS.CASHMERE,
    }}>
        <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
            title: "All Categories",
            drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name="list"/>
        }}/>
        <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
            title: "Favorites",
            drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name="heart"/>
        }}/>
    </Drawer.Navigator>
}

export default function App(props) {
    return (
        <>
            <StatusBar style='light'/>
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
                        headerStyle: {backgroundColor: COLORS.BROWN},
                        headerTintColor: COLORS.WHITE,
                        contentStyle: {backgroundColor: COLORS.WALNUT},
                    }}>
                        <Stack.Screen name="All Categories" component={DrawerNavigator} options={{
                            headerShown: false
                        }}
                        />
                        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
                        />
                        <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen}
                                      options={{
                                          title: "About the Meal"
                                      }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})