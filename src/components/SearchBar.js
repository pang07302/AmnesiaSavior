import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                // value=""
                // onChangeText={}
                // onFocus={}

                />
            <Feather name="search" size={24} color="black" />

        </View>

    )
};

const styles = StyleSheet.create({ 
    container: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 32,
        borderWidth:1,
        borderColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    input: {
        fontSize:20,
        width: '85%',
        marginRight: '5%'

    },


});

export default SearchBar;

