import React from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

const Card = (props) => {
  //In the View styles we spread the card styles into a new object, and secondly apply styles from props to be appended to that obj
  //therefore everything in props.style will add aditional styles and also override anything in the styles.card
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 8,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
