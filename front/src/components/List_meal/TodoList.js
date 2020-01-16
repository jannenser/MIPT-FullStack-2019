import React from 'react';
import TodoItem from './TodoItem';

const styles = {
	ul: {
        listStyle: 'upper-alpha',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        opacity: '0.85'
        

	}
}

export default function TodoList(props){
	const todoListArr = props.TodoListArr;
	return (
		<ul style={styles.ul}>
			{todoListArr.map(function(todo, index){
				return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />
			})}
		</ul>
	)
}