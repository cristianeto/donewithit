import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSepatator from "../components/ListItemSepatator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit ante justo, eget eleifend mauris facilisis sed.",
    image: require("../assets/cristianguaman.png"),
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit ante justo, eget eleifend mauris facilisis sed. Fusce congue rhoncus massa, ut mattis mauris. Suspendisse non ex ultricies, tincidunt sapien non, vulputate ipsum. Etiam sit amet mi eu dui imperdiet rhoncus. Donec nunc quam, sagittis eget orci viverra, efficitur varius.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit ante justo, eget eleifend mauris facilisis sed. Fusce congue rhoncus massa, ut mattis mauris. Suspendisse non ex ultricies, tincidunt sapien non, vulputate ipsum. Etiam sit amet mi eu dui imperdiet rhoncus. Donec nunc quam, sagittis eget orci viverra, efficitur varius.",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //delete message from messages array
    const newMessages = messages.filter((msg) => msg.id !== message.id);
    setMessages(newMessages);
    //call the server
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected!", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevrons
          />
        )}
        ItemSeparatorComponent={() => <ListItemSepatator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  separator: {},
});
export default MessagesScreen;
