import React from 'react';
import {StyleSheet, Text, View} from "react-native";

import {COLORS} from "../../assets/constants/constants";

function Subtitle({title}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    );
}

export default Subtitle;


const styles = StyleSheet.create({
    subtitle: {
        color: COLORS.CALICO,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },
    subtitleContainer: {
        padding: 6,
        margin: 4,
        borderBottomColor: COLORS.CALICO,
        borderBottomWidth: 2,
        marginHorizontal: 12
    }
})