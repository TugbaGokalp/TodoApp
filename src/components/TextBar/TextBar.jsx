import React from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import styles from './TextBar.styles';

const TextBar = ({textInput, setTextInput, todos, setTodos}) => {
  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Error', 'Please input a text');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.textBar}>
        <TextInput
          placeholder="todo.."
          value={textInput}
          onChangeText={text => setTextInput(text)}
        />
      </View>
      <View>
        <Button style={{borderRadius: 10}}  color="#1f145c" title="save" onPress={addTodo} />
      </View>
    </View>
  );
};

export default TextBar;
