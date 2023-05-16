import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



const ImageViewer = ({imgSource}) => {
    return (
       
        <Image source={imgSource} style={styles.image } />
    

    )

};

const styles = StyleSheet.create({
    image: {
        // maxWidth:'100%',
        // maxHeight:'100%',
       
        height:'100%',
        width:'auto',
        aspectRatio: 0.6,
        resizeMode: 'contain'
        //objectFit: 'contain',
        //objectPosition: 3
       
        // objectFit:'height'
    }


});

export default ImageViewer;