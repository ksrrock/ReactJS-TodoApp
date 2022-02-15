import React from 'react'
import { useState } from 'react';
export const Form = (props) => {

    const [description, setDescription] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const task={
            description:description,
            isCompleted:false
        }
        props.addItem(task);
        e.target.reset();
    }

    return (
        <div className="container w-50 p-4">
            <form className="input-group" onSubmit={handleSubmit}>
                <input type="text" 
                className="form-control col-sm-9" 
                placeholder="Enter Task" 
                aria-label="Recipient's username" 
                aria-describedby="button-addon2" 
                onChange={(e)=>{
                    setDescription(e.target.value);
                }}
                required
                />
                <button className="btn btn-outline-success col-sm-3" type="submit" id="button-addon2">Add</button>
            </form>
        </div>



    )
}
