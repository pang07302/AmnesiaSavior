import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ImageViewer from '../components/ImageViewer';
import BasicButton from "../components/buttons/BasicButton";

const img = require("./../assets/success_screen.png")

const SubmittedScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={img} ratio={.8}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 22, fontWeight: 'bold', paddingBottom: 16}}>
                    Password Reset
                </Text>
                <Text style={{fontSize:18, color: '#696969'}}>
                    Your password has been reset successfully.
                </Text>
            </View>
    
            <BasicButton
                label={'Back to home'}
                onPress={()=>console.log('navigate to home screen')}
            />
         
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        //justifyContent: 'center',
        // borderWidth: 2,
        // borderColor: 'red'

    },
    imageContainer: {
        height: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingBottom: 2,
        //borderWidth: 2
        
    },
    textContainer: {
        height: '16%',
        justifyContent: 'center',
        alignItems: 'center',
        //borderWidth: 2

    },



});

export default SubmittedScreen;