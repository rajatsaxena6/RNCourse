import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) =>
      [...currentGoals, { text: enteredGoalText, key: Math.random().toString() }]
    );
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals =>  {
        return currentGoals.filter(goal => goal.key !== id)}
      );
    }

return (
  <View style={styles.appContainer}>
    <GoalInput addGoal={addGoalHandler} />
    <View style={styles.goalsContainer}>
      <FlatList data={goalsList} renderItem={(item) => {
        return (
          <GoalItem text={item.item.text}
            id={item.item.key}
            onDelete={deleteGoalHandler}
          />
        )
      }}
        keyExtractor={(item, index) => {
          return item.key;
        }}
      />
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }

});
