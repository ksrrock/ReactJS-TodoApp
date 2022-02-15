import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form'
import { TodoLists } from './components/TodoLists';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

function App() {

  const [tasks, setTasks] = useState([]);
  const [typeOfTask,setTypeOfTask]=useState(false);

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

 const updatetask=(taskid,content)=>{
  const newtasks=tasks.map(t=>{
    if(t.id===taskid){
      t.description=content;
    }
    return t;
  })
  setTasks(newtasks)
 }
 const returnTasks=(type)=>{
   if(type===false) return tasks;
   else{
     const newTasks=tasks.filter(t=>t.isCompleted===true);
     return newTasks;
   }
 }

  return (
    <div className="App">
     <Header></Header>
     <Container>
     <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        <Switch inputProps={{ 'aria-label': 'ant design' }} 
        onChange={()=>setTypeOfTask(!typeOfTask)}
        />
        <Typography>Show completed Tasks</Typography>
      </Stack>
     </Container>
     <Form addItem={addtask}></Form>
     <TodoLists updateTask={updatetask} updateTaskStatus={update} deleteItem={deleteTask} tasks={returnTasks(typeOfTask)}></TodoLists>
   
    </div>
  );
}

export default App;
