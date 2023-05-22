import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const Reminder = ({text, onPress, linkTxt}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Pressable onPress={onPress}>
                <Text 
                    style={[
                        styles.text, 
                        {color: 'black', fontWeight: 'bold'}]}
                >
                    {" "}{linkTxt}
                </Text>
            </Pressable>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: "#696969"
    }

});

export default Reminder;