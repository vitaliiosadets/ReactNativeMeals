import React from 'react';
import {StyleSheet, Text} from "react-native";
import colors from "../../helpers/colors";

function InstructionText({children, styleProps}) {
    return (
        <Text style={[styles.instructionText, styleProps]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: colors.secondary500,
        fontSize: 24,
    },
});