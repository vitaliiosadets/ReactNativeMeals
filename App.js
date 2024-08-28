import {ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import StartGamesScreen from "./screens/StartGamesScreen";
import {LinearGradient} from "expo-linear-gradient";
import React, {useState, useCallback} from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./helpers/colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font"
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from "expo-status-bar";


SplashScreen.preventAutoHideAsync();

export default function App() {
    const [userNumber, setUserNumber] = useState(null)
    const [roundsNumber, setRoundsNumber] = useState(0)
    const [isGameOver, setGameOver] = useState(false);

    const [isFontsLoading] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if (isFontsLoading) {
            await SplashScreen.hideAsync();
        }
    }, [isFontsLoading]);

    if (!isFontsLoading) {
        return null;
    }

    function handleNumberInput(pickedNumber) {
        setUserNumber(pickedNumber)
        setGameOver(false)
    }

    function startNewGame() {
        setUserNumber(null)
        setRoundsNumber(0)
        setGameOver(false)
    }

    let screen = <StartGamesScreen onConfirmNumber={handleNumberInput}/>

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} setGameOver={setGameOver} setRoundsNumber={setRoundsNumber}/>
    }

    if (isGameOver) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={roundsNumber} onClick={startNewGame}/>
    }


    return (
        <>
            <StatusBar style="light"/>
            <LinearGradient colors={[colors.primary800, colors.secondary500]} style={styles.rootScreen}
                            onLayout={onLayoutRootView}>
                <ImageBackground source={require('./assets/background.png')} resizeMode="cover"
                                 style={styles.rootScreen}
                                 imageStyle={styles.backgroundImage}>
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },

    backgroundImage: {
        opacity: 0.25,
    }
});
