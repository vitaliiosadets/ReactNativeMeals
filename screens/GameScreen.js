import {Text, View, StyleSheet, Alert, FlatList, useWindowDimensions} from 'react-native';
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";


function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    return randomNumber
}

let minBoundary = 1;
let maxBoundary = 100

function GameScreen({userNumber, setGameOver, setRoundsNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [roundsCounter, setRoundsCounter] = useState([initialGuess])
    const {width, height} = useWindowDimensions();

    function handleNextGuess(direction) {
        if (direction === 'lower' && currentGuess < userNumber || direction === 'greater' && currentGuess > userNumber) {
            Alert.alert('Dont lie!', 'you know that', [{text: 'Sorry', style: "cancel"}])
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)

        setCurrentGuess(newRandomNumber)
        setRoundsCounter(prevGuessRounds => [newRandomNumber, ...prevGuessRounds,])
    }

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100
    }, []);

    useEffect(() => {
        if (currentGuess === userNumber) {
            setGameOver(true)
        }
    }, [currentGuess, userNumber, setGameOver]);

    const guessNumberLength = roundsCounter.length

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText styleProps={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handleNextGuess.bind(this, 'lower')}>
                            <Ionicons name={'remove'} size={24}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handleNextGuess.bind(this, 'greater')}>
                            <Ionicons name={'add'} size={24}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    )

    if (width > 400) {
        content = (
            <>
                <InstructionText styleProps={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handleNextGuess.bind(this, 'lower')}>
                            <Ionicons name={'remove'} size={24}/>
                        </PrimaryButton>
                    </View>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainerWide}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handleNextGuess.bind(this, 'greater')}>
                            <Ionicons name={'add'} size={24}/>
                        </PrimaryButton>
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={styles.screen}>
            <Title>{'Opponent\'s Guess'}</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList keyExtractor={(item) => item} data={roundsCounter}
                          renderItem={(itemData) => <GuessLogItem roundNumber={guessNumberLength - itemData.index}
                                                                  guess={itemData.item}/>}/>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1
    },
    buttonContainerWide: {
        flexDirection: 'row',
        alignItems: "center"
    },
    instructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
})