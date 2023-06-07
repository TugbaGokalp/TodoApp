import React from 'react'
import { Text, View } from 'react-native'


const ListItem = ({todo, markToDoComplete}) => {

    
    return (
      <View style={styles.listItem} >
        <Text style={{fontSize: 15, color: '#1f145c', textDecorationLine: todo.completed ? 'line-through' : 'none'}}> {todo?.task}</Text>
        <Text style={{marginLeft: 220}} onPress={() => markToDoComplete(todo?.id)}>Delete</Text>
      </View>
    );
  };

export default ListItem
