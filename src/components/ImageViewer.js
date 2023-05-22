import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



const ImageViewer = ({imgSource, ratio}) => {
    return (
       
        <Image source={imgSource} style={[styles.image, {aspectRatio: ratio,} ]} />
    
    )
};

const styles = StyleSheet.create({
    image: {
        height:'100%',
        width:'auto',
        resizeMode: 'contain'
    }
});

export default ImageViewer;