import React from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView, FlatList, SafeAreaView } from 'react-native';
import TabBar from '../components/TabBar';
import Card from '../components/cards/Card';
import SearchBar from '../components/SearchBar';
import { Body, Footer } from '../theme/mainStyle';


const HomeScreen = () => {
    const CATEGORY = [
        {
            id: '001',
            name: 'All',
            icon: 'all-inclusive'

        },
        {
            id: '002',
            name: 'Social Media',
            icon: 'chat'
        },
        {
            id: '003',
            name: 'E-mail',
            icon: 'email'
        },
        {
            id: '004',
            name: 'Game',
            icon: 'gamepad-variant'
          },
          {
            id: '005',
            name: 'Website/App',
            icon: 'application-outline'
          },
          {
            id: '006',
            name: 'Bank Account',
            icon: 'bank-outline'
          },
          {
            id: '007',
            name: 'Network Provider',
            icon: 'access-point-network'
          },
      ];
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text 
                    style={{fontSize: 36, fontWeight: 'bold', paddingLeft: '5%'}}
                >
                    My Vault
                </Text>
            </View>
            <View>
                <SearchBar/>
            </View>
            
            
            <Body>

            </Body>
            {/* <ScrollView style={styles.bodyContainer}>
                {
                    CATEGORY.map((item, index) => {
                        return (
                        //<View key={index}>
                            <Card 
                                key={item.id}
                                theme='primary'
                                itemName={item.name}
                                icon={item.icon}
                                onPress={()=>console.log('click category card')}
                            />
                        //</View>
                        )
                        
                    })
                }

            </ScrollView> */}
            <Footer>    
                <TabBar/>
            </Footer>
            

        </View>
        

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1
    },
    textContainer: {
        // borderWidth: 2,
        height: '20%',
        justifyContent: 'center',
        backgroundColor: '#ffd94d',
        position: 'relative'

    },
    bodyContainer: {
        flex: 1
    }

})

export default HomeScreen;
