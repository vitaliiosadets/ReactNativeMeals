import React from 'react';
import {Text, View, Pressable, StyleSheet, Image, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";

import MealDetails from "../MealDetails";

import {COLORS} from "../../assets/constants/constants";

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation()

    function pressHandler() {
        navigation.navigate("MealDetailsScreen", {
            mealId: id
        })
    }


    return (
        <View style={styles.mealItem}>
            <Pressable style={({pressed}) =>
                pressed ? styles.buttonPressed : null
            } onPress={pressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        complexity={complexity}
                        duration={duration}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.BLACK,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
})