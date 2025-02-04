
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, removeNever, restore } from "../Redux/action";
import { Button } from "bootstrap";



export default function PresentationRecyclingBin() {

    const tasks = useSelector(state => state.RecyclingBin.recyclingBin);

    const dispatch = useDispatch();

    return (

        <>

            <ul className="task-list">

                {tasks.map((task) => (

                    <li key={task.Id} className="task-item">

                        {task.NameTask} - {task.StartTime} - {task.Deddline}

                        <button className="remove-task-button" onClick={() => dispatch(removeNever(task))}>

                            Remove never Task

                        </button>

                        <button className="remove-task-button" onClick={() => dispatch(restore(task))}>

                            restore Task

                        </button>

                    </li>

                ))}

            </ul>

        </>

    );

};