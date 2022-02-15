import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form'
import { TodoLists } from './components/TodoLists';
function App() {

  const [tasks, setTasks] = useState([]);

 const addtask=(task)=>{
   task.id=Math.random();
  setTasks([...tasks,task])
 }  

 const deleteTask=(id)=>{
   setTasks(tasks.filter(t=>t.id!==id))
 }
 const update=(id)=>{
  const newtasks=tasks.map(
   t=>{
     if(t.id===id)
     t.isCompleted=!t.isCompleted
     return t;
   } 
  )
  setTasks(newtasks)
 }
  return (
    <div className="App">
     <Header></Header>
     <Form addItem={addtask}></Form>
     <TodoLists updateTaskStatus={update} deleteItem={deleteTask} tasks={tasks}></TodoLists>
    </div>
  );
}

export default App;
