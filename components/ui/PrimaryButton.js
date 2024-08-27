import {StyleSheet, Text, View, Pressable,} from 'react-native';
import colors from "../../helpers/colors";

export default function PrimaryButton({children, onPress}) {


    return (
        <View style={styles.outerContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.innerContainer] : styles.innerContainer}
                       onPress={onPress}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    text: {
        color: colors.text,
        textAlign: 'center',
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.75,
    }
});

