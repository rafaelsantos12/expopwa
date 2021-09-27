import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

interface Following {
    login: string,
    avatar_url: string
}

const Main: React.FC = () => {
  
    const [following, setFollowing] = useState<Following[]>([]);

    useEffect( ()=>{
        fetch('https://api.github.com/users/rafaelsantos12/following').then( 
            response => {
                response.json().then(data =>{
                    setFollowing(data);
                });
            });

    })

    return(
        
        <FlatList
            contentContainerStyle={{ padding: 24}}
            data={following}
            keyExtractor ={following => following.login}
            renderItem={({ item: following }) =>
                <View style={styles.following}>
                    <Image style={styles.image} source={{ uri: following.avatar_url}}/>
                    <Text>{following.login}</Text>
                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    following: {
        width: 'row',
        alignItems: 'center',
        marginBottom: 20
    },

    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
    }
})

export default Main;