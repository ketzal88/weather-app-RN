import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
// import { createStore, combineReducers } from 'redux';
// import { goalsReducer } from './store/reducers/goals';
// import { Provider } from "react-redux";

// const rootReducer = combineReducers({
//   goals: goalsReducer
// });

// const store = createStore(rootReducer);

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [ isAddMode, setIsAddmode ] = useState(false)

  const addGoaldHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddmode(false)
  };

  const cancelGoalHandler = () => {
    setIsAddmode(false)
  }

  const removeGoalHandler = (goalKey) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalKey);
    });
  };

  return (
    // <Provider store={store}>
      <View style={styles.screen}>
        <Button title="Add new goal" onPress={() => setIsAddmode(true)}/>
        <GoalInput visible={isAddMode} cancelGoalHandler={cancelGoalHandler} addGoaldHandler={addGoaldHandler} />
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              item={itemData.item.value}
            />
          )}
        />
      </View>
    // </Provider>
  );
}

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
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
