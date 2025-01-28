
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../Redux/action";


export default function Input() {

    const tasks = useSelector(state => state.todo);

    const dispatch = useDispatch();


    const [nameTask, setNameTask] = useState('');

    const [deddline, setDeddline] = useState('');

    const [startTime, setStartTime] = useState('');

    const [id, setId] = useState(1);


    return (
        <>
            <input className="task-input"onBlur={(e) => setNameTask(e.target.value)} placeholder="Name Task"/>

            <input className="task-input"onBlur={(e) => setDeddline(e.target.value)} placeholder="Deadline"/>

            <input className="task-input" onBlur={(e) => setStartTime(e.target.value)}placeholder="Start Time"/>

            <button className="add-task-button"
            onClick={() => {dispatch(add({ NameTask: nameTask, Deddline: deddline, StartTime: startTime, Id: id }));
            setId(id + 1);}}>Add Task</button>

        </>

    );

};