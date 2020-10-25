import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/cristianguaman.png')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/cristianguaman.png')
  },
]

function MessagesScreen(props) {
  return (
    <Screen >
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image} />} />
    </Screen>
  );
}

const styles = StyleSheet.create({

})
export default MessagesScreen;