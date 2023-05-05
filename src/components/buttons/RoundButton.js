import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const RoundButton = ({label, onPress}) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>

    );
};
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        marginHorizontal: 24,
        marginVertical: 16,
        width: 200,
        height: 60
     
    },
    button: {
        backgroundColor: '#ffd94d',
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 32,
        justifyContent: 'center',
        
    },
    buttonLabel: {
        fontSize: 16,
        letterSpacing: .25,
    }
})

export default RoundButton;