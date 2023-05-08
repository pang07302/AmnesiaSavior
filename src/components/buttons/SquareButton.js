import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SquareButton = ({iconSource, onPress}) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <FontAwesome name={iconSource} size={25} style={styles.buttonIcon} />
            </Pressable>

        </View>
    )
};

const styles = StyleSheet.create({
    buttonIcon: {
        paddingHorizontal: 15
    },
    button: {
        borderRadius: 2,
        borderColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 15
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 2,
        marginHorizontal: 10,
        width: 70,
        height: 80,
        //borderWidth: 3
        


    }

})


export default SquareButton;