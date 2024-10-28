import React, {useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from "../data/dummy-data"
import {StyleSheet} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

import MealsList from "../components/MealsList/MealsList";


function MealsOverviewScreen({}) {
    const route = useRoute()
    const navigation = useNavigation()


    const displayedMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(route.params.categoryId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === route.params.categoryId)

        navigation.setOptions({
            title: categoryTitle.title
        })
    }, [navigation, route.params.categoryId]);


    return <MealsList items={displayedMeals}/>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})