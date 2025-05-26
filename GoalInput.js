import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoal] = useState('');

    function goalChangeHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.addGoal(enteredGoalText);
        setEnteredGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalChangeHandler} value={enteredGoalText} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        width: '70%',
        marginRight: 8,
        padding: 8
    }
})

