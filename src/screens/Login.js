import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {useFonts} from 'expo-font';
import InputField from '../components/forms/InputField';
import TopBar from '../components/TopBar';
import BasicButton from '../components/buttons/BasicButton';
import SocialLoginServices from '../components/SocialLoginServices';


const Login = () => {
    const [loaded] = useFonts({
        'Roboto-Light': require('./../../assets/fonts/Roboto-Light.ttf'),
     })
 
     if(!loaded){
         return null;
     }
    return(
        <View style={styles.container}> 
            <TopBar 
                title={'Log in'} 
                onPress={()=>console.log('back')}/>

            {/* ----------------Middle------------------- */}
            <View style={{position:'relative',alignItems:'center', justifyContent:'center'}}>   
                <InputField 
                    label={'Your Email'} 
                    onChangeText={()=>console.log('text changed')}
                    placeholder={'Enter your email'}
                    keyboardType={'email-address'} />

                <InputField 
                    label={'Password'} 
                    onChangeText={() => console.log('pwd changed')}
                    placeholder={'Enter your password'}/>
                <View style={{ width:360}}>     
                    <Pressable onPress={() => console.log('forget password')}>
                        <Text style={styles.forgetPwdTxt}>Forget password?</Text>
                    </Pressable>  
                </View>      
            </View>  

              {/* ---------------Footer--------------------    */}
            <View style={styles.buttonContainer}>
                <BasicButton
                    label={"Log in"}
                    onPress={() => console.log("Log in")}/>
                
                <SocialLoginServices/>

            </View>
            <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Don't have an account?</Text>
                    <Pressable onPress={() => console.log('direct to sign up screen')}>
                        <Text style={[styles.footerText, {color: 'black', fontWeight:'bold'}]}> Sign up</Text>
                    </Pressable>
            </View>

            
                                            
        </View>

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%'
        //borderWidth: 3
    },
    header:{

    },
    body:{

    },
    footer:{

    },
    forgetPwdTxt: {
        textAlign: 'right',
        fontSize: 18,
        fontFamily:'Roboto-Light',
        color: '#534b8a'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 2,
        height: 300
    },
    footerContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerText: {
        fontSize: 20,
        color: '#696969'
    }

});
export default Login;