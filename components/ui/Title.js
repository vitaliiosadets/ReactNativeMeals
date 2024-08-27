import {StyleSheet, Text,} from 'react-native';
import colors from "../../helpers/colors";

export default function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )

}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: colors.secondary500,
        textAlign: "center",
        borderWidth: 2,
        borderColor: colors.secondary500,
        borderRadius: 8,
        padding: 12
    }
});

