import React from 'react';
import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons"

function IconButton({name, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={name} size={24} color="white"/>
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
})