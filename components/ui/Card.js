import React from 'react';
import {StyleSheet, View, Dimensions} from "react-native";
import colors from "../../helpers/colors";

function Card({children}) {
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: colors.primary800,
        shadowColor: colors.shadow,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
});