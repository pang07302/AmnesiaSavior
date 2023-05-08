import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {useFonts} from 'expo-font';
import SquareButton from './buttons/SquareButton';

const SocialLoginServices = () => {
    const [loaded] = useFonts({
        'Roboto-Light': require('./../../assets/fonts/Roboto-Light.ttf'),
     })
 
    if(!loaded){
        return null;
    }
    return (
        <>
            <Text style={styles.text}>or continue with</Text>
            <View style={styles.btnContainer}>
                <SquareButton
                    iconSource={'google'}
                    onPress={()=>console.log('press google button')}/>

                <SquareButton
                    iconSource={'facebook'}
                    onPress={()=>console.log('press facebook button')}/>

                <SquareButton
                    iconSource={'apple'}
                    onPress={()=>console.log('press facebook button')}/>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily:'Roboto-Light',
        color: '#696969'
    },
    btnContainer: {
        flexDirection: 'row',
    }


});

export default SocialLoginServices;