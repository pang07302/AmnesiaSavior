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
        marginTop: '10%',
        borderRadius: 32,
        borderWidth:2,
        borderColor: 'blue'
    },
    input: {
        fontSize:20,
        width: '85%',
       marginRight: '5%'

    },


});

export default SearchBar;

