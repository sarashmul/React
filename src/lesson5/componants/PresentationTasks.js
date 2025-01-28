
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../Redux/action";
import { Button } from "bootstrap";

// export default function Presentation() {
//     const tasks = useSelector(state => state.todo); 
//     const dispatch = useDispatch();

//     return (
//         <>

//            <ul>
//            {tasks.map((task)=> (
//             <li key={task.Id}>
//                 {task.NameTask} - {task.StartTime} -{task.Deddline} 
//                  <button onClick={() => dispatch(remove(task.Id))}> remove task</button> 
//             </li>

//            ))}
//            </ul>
//         </>
//     );
// };

export default function Presentation() {

    const tasks = useSelector(state => state.todo);

    const dispatch = useDispatch();


    return (

        <>

            <ul className="task-list">

                {tasks.map((task) => (

                    <li key={task.Id} className="task-item">

                        {task.NameTask} - {task.StartTime} - {task.Deddline}

                        <button className="remove-task-button" onClick={() => dispatch(remove(task.Id))}>

                            Remove Task

                        </button>

                    </li>

                ))}

            </ul>

        </>

    );

};