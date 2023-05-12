import React from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import {FontAwesome, MaterialCommunityIcons}from "react-native-vector-icons";



const Card = ({theme, itemName, icon, onPress}) => {
    if (theme === 'primary'){
        return (
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <View style={styles.logoContainer}>
                        <MaterialCommunityIcons name={icon} size={24} color="black"/>
                    </View>
                       
                    <Text style={[styles.label, {top: -28}]}>{itemName}</Text>
                      
                </TouchableOpacity>
            </View>
        )
    };
    return (
        <View style={styles.container}> 
            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.label}>{itemName}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <Pressable onPress={()=>console.log('click remove button')}>
                    <FontAwesome name="remove" size={24} color="black" />
                </Pressable>
            </View>
            
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flexDirection: 'row',
        //backgroundColor: 'black',
        width:'100%',
        //paddingHorizontal: 8,
        //marginTop: 32,
    },
    btnContainer: {
        width: 370,
        //flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'flex-start',
        //borderColor: 'green',
        //borderWidth: 2,
        position: 'absolute',
        zIndex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        padding: 8,
        height: 56,
        backgroundColor: '#f2f3f4',
        // might be changed as it does not work with android 
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
    iconContainer: {
        justifyContent: 'center',
       //borderWidth: 2,
        position: 'relative',
        zIndex: 2,
        padding: 8,
        height: 60,
        left: 160
    },
    logoContainer: {
        justifyContent: 'center',
        //alignItems: 'flex-start',
        borderWidth: 2,
        position: 'relative',
        zIndex: 2,
        padding: 16,
        height: 60,
        right: 145,
        top: 18
    }, 

    label: {
        fontSize: 28,
        //fontFamily: 'Roboto-Medium'

    }



});

export default Card;