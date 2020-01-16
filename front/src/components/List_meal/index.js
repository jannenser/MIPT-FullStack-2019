import React, { Component } from "react";
import AddTodo from '../../containers/AddTodo/AddTodo'
import VisibleTodoList from '../../containers/AddTodo/VisibleTodoList'
import moment from "moment";
import TodoList from './TodoList'

function App() {
    const [TodoListArr, setTodoListArr] = React.useState(
        [
          {id: 1, title:'Breakfast', doneFlg: false},
          {id: 2, title:'Lunch', doneFlg: false},
          {id: 3, title:'Dinner', doneFlg: false}
        ]
      )
  
    function Toggle(id){
        setTodoListArr(TodoListArr.map(todo =>{
         if (todo.id === id){
           todo.doneFlg = !todo.doneFlg;
         }
         return todo
       })
       )
    }


    return (
        <div className="App">
            <AddTodo />
            <VisibleTodoList />
            <TodoList TodoListArr={TodoListArr} onToggle={Toggle} />
        </div>
    );
}

export default App;