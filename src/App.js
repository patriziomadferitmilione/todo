import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice'

function App() {

  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">

          <h1>To Do</h1>

          {
            todoList.map(item => (
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;