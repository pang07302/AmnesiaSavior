import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {useFonts} from 'expo-font';
import IconButton from './buttons/IconButton';

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
                <IconButton
                    iconSource={'google'}
                    onPress={()=>console.log('press google button')}/>

                <IconButton
                    iconSource={'facebook'}
                    onPress={()=>console.log('press facebook button')}/>

                <IconButton
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
        marginTop: 8
    }


});

export default SocialLoginServices;