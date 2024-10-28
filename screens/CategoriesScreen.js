import React from 'react';
import {CATEGORIES} from "../data/dummy-data";
import {FlatList, View} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import {useNavigation} from "@react-navigation/native";


export default function CategoriesScreen({}) {
    const navigation = useNavigation()

    function renderCategoryItem(itemData) {
        const {item: {title, color, id}} = itemData;

        function pressHandler() {
            navigation.navigate("MealsOverview", {
                categoryId: id
            })
        }

        return <CategoryGridTile title={title} color={color} onPress={pressHandler}/>
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

