import React from 'react';
import {Text, View, StyleSheet} from "react-native";

import {COLORS} from "../../assets/constants/constants";

function List({children}) {
    return (
        children.map((item, index) => <View key={index} style={styles.listItem}><Text style={styles.item}>{item}</Text></View>)
    );
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: COLORS.CALICO
    },
    item: {
        color: COLORS.LIGHT_BROWN,
        textAlign: "center"
    }
})