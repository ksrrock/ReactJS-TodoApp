import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { TextField } from '@mui/material';
export const TodoItem = (props) => {

  
    const [edit, setEdit] = useState(false);
    const [updatedtask,setUpdatedTask]=useState(props.taskItem.description)

    const deleteTask=(id)=>{
      props.deleteTasks(id);
    }
    const saveChanges=(taskid,content)=>{
      props.updateTaskContent(taskid,content)
      setEdit(false);
    }
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const updateisComplete=(id)=>{
    props.update(id);
  }
  return (
      
    <Container maxWidth="xs">
         <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography variant="body2">
        {
          !edit?<>
          <Switch {...label} onChange={()=>{updateisComplete(props.taskItem.id)}}/>
           <h5>{props.taskItem.description}</h5> 
           <h6>Completed?: {props.taskItem.isCompleted?'Yes':'No'}</h6>
          </>
          :""
         
        }
     
      </Typography>
      {

          edit?
          <>
          <TextField id="outlined-basic" value={updatedtask} label="Enter new description" variant="outlined" 
          onChange={(e)=>setUpdatedTask(e.target.value)}
          />
          <br></br>
          <Button size="small" onClick={()=>saveChanges(props.taskItem.id,updatedtask)}>Save</Button>
          </>
          :" "
      }
     
    </CardContent>
    <CardActions>
      
      {
        !props.taskItem.isCompleted && !edit?<div><Button size="small" onClick={()=>deleteTask(props.taskItem.id)}>Delete</Button>
        <Button size="small" onClick={()=>setEdit(true)}>Update</Button>
        </div>:""
      }
      
    </CardActions>
  </Card>
  <br></br>
    </Container>
   
  )
}
export default TodoItem;