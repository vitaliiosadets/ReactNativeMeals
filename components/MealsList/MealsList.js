import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";

import MealItem from "./MealItem";


function MealsList({items}) {
    function renderMealItem(itemData) {
        const {item: {title, color, id, imageUrl, duration, complexity, affordability}} = itemData;


        return <MealItem
            id={id}
            title={title}
            imageUrl={imageUrl}
            duration={duration}
            complexity={complexity}
            affordability={affordability}
        >
        </MealItem>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})