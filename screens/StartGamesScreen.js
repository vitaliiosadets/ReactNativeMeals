import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import colors from "../helpers/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGamesScreen({onConfirmNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (text) => {
        setEnteredNumber(text);
    }


    const confirmInputHandler = () => {
        const chosenNumber = +enteredNumber;

        if (isNaN(chosenNumber) || chosenNumber <= 0 || enteredNumber === '' || chosenNumber > 99) {
            Alert.alert('Invalid number!',
                'Number has to be a number between 1 and 99',
                [{
                    text: "Okay",
                    style: 'destructive',
                    onPress: resetInputHandler
                }]
            )
            return;
        }

        onConfirmNumber(chosenNumber);
    }


    const resetInputHandler = () => {
        setEnteredNumber('');
    }


    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput style={styles.numberInput}
                           maxLength={2}
                           keyboardType="number-pad"
                           autoCapitalize="none"
                           onChangeText={numberInputHandler}
                           value={enteredNumber}
                           autoCorrect={false}/>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 30,
        alignItems: "center"
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: colors.secondary500,
        borderBottomWidth: 2,
        color: colors.secondary500,
        marginVertical: 8,
        fontWeight: "bold",
        width: 55,
        textAlign: 'center'
    },
    instructionText: {
        color: colors.secondary500,
        fontSize: 24,
        fontWeight: "bold",
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
});
