import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



const ImageViewer = ({imgSource}) => {
    return (
       
        <Image source={imgSource} style={styles.image}/>
    

    )

};

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 450,
    }


});

export default ImageViewer;