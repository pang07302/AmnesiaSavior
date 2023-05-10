import React from 'react';
import {useFonts} from 'expo-font'
import { StyleSheet, View, Text, Pressable } from 'react-native';

const BasicButton = ({label, onPress}) => {
    const [loaded] = useFonts({
       'Roboto-Medium': require('../../../assets/fonts/Roboto-Medium.ttf')
    })

    if(!loaded){
        return null;
    }
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
        paddingTop: 3,
        marginHorizontal: 24,
        marginVertical: 16,
        width: 250,
        height: 80,
        //borderWidth: 3
     
    },
    button: {
        backgroundColor: '#ffd94d',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 3,
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '80%'
        
    },
    buttonLabel: {
        fontSize: 20,
        letterSpacing: .25,
        fontFamily: 'Roboto-Medium'
       
    }
})

export default BasicButton;