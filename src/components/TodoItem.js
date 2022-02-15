import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Switch from '@mui/material/Switch';
export const TodoItem = (props) => {

  

    const deleteTask=(id)=>{
      props.deleteTasks(id);
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
      <Switch {...label} onChange={()=>{updateisComplete(props.taskItem.id)}}/>
         <h5>{props.taskItem.description}</h5> 
         <h6>Completed?: {props.taskItem.isCompleted?'Yes':'No'}</h6>
      </Typography>
    </CardContent>
    <CardActions>
      
      {
        !props.taskItem.isCompleted?<div><Button size="small" onClick={()=>deleteTask(props.taskItem.id)}>Delete</Button>
        <Button size="small">Update</Button>
        </div>:""
      }
      
    </CardActions>
  </Card>
  <br></br>
    </Container>
   
  )
}
export default TodoItem;