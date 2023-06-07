import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import TextBar from './components/TextBar/TextBar';
import ListItem from './components/ListItem/ListItem';

import styles from './Styles';

const App = () => {
  const [textInput, setTextInput] = useState('');

  const [todos, setTodos] = useState([]);
  const [totalTodos, setTotalTodos] = useState(todos.length);

  const markToDoComplete = (todoId) => {
    const newTodos = todos.map(item => {
      if(item.id == todoId){
        return {...item, completed: true};
      }
      return item;
    });
    setTodos(newTodos);


  }


useEffect(() => {
  setTotalTodos(todos.length)
}, [todos])

  return (
    <SafeAreaView style={{flex: 1}}>
      <View styles={styles.header}>
        <Text style={styles.headerTitle}>TODOs</Text>
        <Text style={styles.numberTodos}>Number of Todos: {totalTodos}</Text>
        <TextBar
          textInput={textInput}
          setTextInput={setTextInput}
          setTodos={setTodos}
          todos={todos}
        />
        <FlatList
          data={todos}
          renderItem={({item}) => <ListItem markToDoComplete= {markToDoComplete} todo={item} />}
          contentContainerStyle={{padding: 20, paddingBottom: 100}}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default App;
