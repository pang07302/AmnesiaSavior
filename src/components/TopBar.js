import React from 'react';
import { StyleSheet, View, Text, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useFonts} from 'expo-font';

const TopBar = ({title, onPress}) => {
    const [loaded] = useFonts({
        'Roboto-Medium': require('./../../assets/fonts/Roboto-Medium.ttf')
     })
 
     if(!loaded){
         return null;
     }
    return (
        <View style={styles.container}> 
            <View>
                <Pressable onPress={onPress} style={styles.iconContainer}>
                    <FontAwesome name="angle-left" size={36} color="black" />
                </Pressable>
            </View> 
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'blue',
        flexDirection: 'row',
        //borderWidth:2,
        borderColor: 'red',
        marginTop:50,
        height: 40,

    },
    iconContainer: {

        position: 'fixed',
        display:'flex',
        zIndex: -1,
        height: '100%',
        backgroundColor:'purple'
       

        
    },
    textContainer: {
  
      
        justifyContent: 'center',
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor:'green'
        
    },
    text: {
        fontSize: 24,
        fontFamily: 'Roboto-Medium',
    }



})

export default TopBar;