import React from 'react';
import {Image, View, Text, StyleSheet, useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import colors from "../helpers/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({userNumber, roundsNumber, onClick}) {
    const {width, height} = useWindowDimensions()

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Game over</Title>
            <View style={[styles.imageContainer, imageStyle]}>
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