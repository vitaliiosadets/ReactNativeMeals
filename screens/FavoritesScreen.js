import React, {useContext} from 'react';
import {StyleSheet, Text, View} from "react-native";
import MealsList from "../components/MealsList/MealsList";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {COLORS} from "../assets/constants/constants";

function FavoritesScreen(props) {
    const favoriteMealsContext = useContext(FavoritesContext)

    const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id))

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals.</Text>
            </View>

        )
    }

    return (
        <MealsList items={favoriteMeals}/>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.WHITE
    }
})