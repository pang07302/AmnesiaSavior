import React from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, SafeAreaView } from 'react-native';
import InputField from '../components/forms/InputField';
import BasicButton from '../components/buttons/BasicButton';
import { Body } from '../theme/mainStyle';
import Reminder from '../components/Reminder';


const ForgetPassword = () => {
    return (
        <Body>
            <View style={styles.topContainer}>
                <Text style={styles.text}>{'Enter your email to receive an email to reset your password.'}</Text>
            </View>
            <View style={styles.inputFieldContainer}>
                <InputField 
                    label={'Email'}
                    onChangeText={() => console.log('direct to reset successful screen')}
                    placeholder={''}
                    />
            </View>
            <View style={styles.btnContainer}>
                <BasicButton
                    label={'Send'}
                    onPress={() => console.log('receive an email to reset password')}
                    />
            </View>
            <View>
                <Reminder
                    text={"Already have an account?"}
                    onPress={() => navigation.navigate("Login")}
                    linkTxt={'Sign in'}

                />

            </View>


        </Body>
    )
};

const styles = StyleSheet.create({
    topContainer: {
        // borderWidth: 2,
        // borderColor: 'red',
        padding: '5%',
        marginTop: '8%',
        justifyContent: 'center',
        alignItems:'center',
        maxHeight: '30%',
    },
    text: {
        fontSize: 20,
        color: "#696969",
        
    },
    inputFieldContainer: {
        // borderWidth: 2,
        // borderColor: 'green',
        padding: '2%',
        maxHeight: '40%',
        justifyContent: 'center',
        alignItems:'center'
    },
    btnContainer: {
        // borderWidth: 2,
        // borderColor: 'yellow',
        padding: '7%',
        maxHeight: '40%',
        justifyContent: 'center',
        alignItems:'center'
    }
    

});

export default ForgetPassword;