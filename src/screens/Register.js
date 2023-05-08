import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {useFonts} from 'expo-font';
import TopBar from '../components/TopBar';
import InputField from '../components/forms/InputField';
import RoundButton from '../components/buttons/RoundButton';
import SocialLoginServices from '../components/SocialLoginServices';


const Register = () => {
    return (
        <View>
            <TopBar 
            title={'Create New Account'} 
            onPress={() => console.log('back to starting screen')}/>

            {/* -----------Middle-------- */}
            <View>
                <InputField 
                label={'Your Email'} 
                onChangeText={()=>console.log('email changed')}
                placeholder={'Enter your email'}
                keyboardType={'email-address'} />

                <InputField 
                    label={'Create Password'} 
                    onChangeText={() => console.log('create password')}
                    placeholder={'Enter your password'}/>

                <InputField 
                    label={'Confirm Password'} 
                    onChangeText={() => console.log('Confirm password')}
                    placeholder={'Confirm your password'}/>       
            </View>

            {/* ---------------Footer---------------- */}
            <View>
                <RoundButton
                    label={'Register'}
                    onPress={() => console.log('direct to main screen')}/>
                <SocialLoginServices/>
                <View>
                    <Text></Text>
                </View>
            </View>

        </View>

    )
};

const styles = StyleSheet.create({

});

export default Register;