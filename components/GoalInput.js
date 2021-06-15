import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredTextGoal, setEnteredTextGoal] = useState("");

  const inputTextChange = (enteredText) => {
    setEnteredTextGoal(enteredText);
  };

  const goalhandler = () => {
    props.addGoaldHandler(enteredTextGoal);
    setEnteredTextGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputBox}>
        <TextInput
          placeholder="input"
          onChangeText={inputTextChange}
          style={styles.input}
          value={enteredTextGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={goalhandler} />
          </View>
          <View style={styles.button}>
            <Button
              color="red"
              title="Cancel"
              onPress={props.cancelGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  inputBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    width: "80%",
    marginBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
