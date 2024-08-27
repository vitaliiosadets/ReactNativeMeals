import React from 'react';
import {Image, View, Text, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import colors from "../helpers/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({userNumber, roundsNumber, onClick}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/success.png')}/>
            </View>
            <View>
                <Text style={styles.summaryText}>It took <Text style={styles.highlight}>{roundsNumber}</Text> round to
                    guess
                    number <Text style={styles.highlight}>{userNumber}</Text></Text>
            </View>
            <PrimaryButton onPress={onClick}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: colors.secondary500,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        fontFamily: 'open-sans',
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: colors.primary500
    }
})