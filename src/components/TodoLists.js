import React from 'react'
import { TodoItem } from './TodoItem';
export const TodoLists = (props) => {

  const tasks=props.tasks;
  return (
     <div>
         {
             tasks.map((task) => {
                return <TodoItem updateTaskContent={props.updateTask} update={props.updateTaskStatus} deleteTasks={props.deleteItem} key={task.id} taskItem={task}></TodoItem>
             })
         }

     </div>
  )
}
