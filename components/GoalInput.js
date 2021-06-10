import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredTextGoal, setEnteredTextGoal] = useState("");

  const inputTextChange = (enteredText) => {
    setEnteredTextGoal(enteredText);
  };

  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder="input"
        onChangeText={inputTextChange}
        style={styles.input}
        value={enteredTextGoal}
      />
      <Button title="Add" onPress={() => props.addGoaldHandler(enteredTextGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});

export default GoalInput;
