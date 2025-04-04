
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../Redux/action";
import { Button } from "bootstrap";
import Input from "./inputTask";



export default function Presentation() {

    const tasks = useSelector(state => state.task.todo);

    const dispatch = useDispatch();

    return (

        <>

            <ul className="task-list">

                {tasks.map((task) => (

                    <li key={task.Id} className="task-item">

                        {task.NameTask} - {task.StartTime} - {task.Deddline}

                        <button className="remove-task-button" onClick={() => dispatch(remove(task))}>

                            Remove Task

                        </button>

                    </li>

                ))}

            </ul>
         <Input></Input>
        </>

    );

};