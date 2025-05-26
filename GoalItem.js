import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
    function onDeleteHandler() {
        props.onDelete(props.id);
    }

    return (
        <View style={styles.goalItem} >
            <Pressable onPress={onDeleteHandler} android_ripple={{color: 'lightgrey'}}>
            <Text style={styles.goalText}>{props.text}
            </Text>
        </Pressable>
            </View >
       
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'purple'
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});




