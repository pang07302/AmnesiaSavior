import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SquareButton = ({iconSource, onPress}) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <FontAwesome name={iconSource} size={20} style={styles.buttonIcon} />
            </Pressable>

        </View>
    )
};

const styles = StyleSheet.create({
    buttonIcon: {
        paddingHorizontal: 10
    },
    button: {
        borderRadius: 2,
        borderColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        marginHorizontal: 20,
        width: 100,
        height: 100,
        borderWidth: 3
        


    }

})


export default SquareButton;