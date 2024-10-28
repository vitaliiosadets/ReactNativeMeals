import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

import {MEALS} from "../data/dummy-data"
import {COLORS} from "../assets/constants/constants";

import {FavoritesContext} from "../store/context/favorites-context";

function MealDetailsScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    const favoriteMealContext = useContext(FavoritesContext);

    const mealIsFavorite = favoriteMealContext.ids.includes(mealId)

    function toggleFavorite() {
        if (mealIsFavorite) {
            return favoriteMealContext.removeFavorite(mealId)
        }
        favoriteMealContext.addFavorite(mealId)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton name={mealIsFavorite ? 'heart' : 'heart-outline'} icon-
                                           onPress={toggleFavorite}/>

        })
    }, [navigation, toggleFavorite]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                duration={selectedMeal.duration}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle title="Ingredients"/>
                    <List>{selectedMeal.ingredients}</List>
                    <View style={styles.subtitleContainer}>
                        <Subtitle title="Steps"/>
                    </View>
                    <List>{selectedMeal.steps}</List>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: COLORS.WHITE
    },
    detailText: {
        color: COLORS.WHITE
    },
    listOuterContainer: {
        alignItems: "center"
    },
    listContainer: {
        width: "80%"
    }
})