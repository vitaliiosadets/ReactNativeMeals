import React from 'react';
import {Pressable, Text, View, StyleSheet, Platform} from "react-native";

import {COLORS} from "../assets/constants/constants";

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({pressed}) => [
                    styles.buttonStyle, pressed ? styles.buttonPressed : null
                ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        shadowColor: COLORS.BLACK,
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: COLORS.WHITE,
        overflow: Platform.OS === 'android' ? "hidden" : "visible"
    },
    buttonStyle: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
})