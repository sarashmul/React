
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../Redux/action";


export default function Input() {

    const tasks = useSelector(state => state.task.todo);

    const dispatch = useDispatch();


    const [nameTask, setNameTask] = useState('');

    const [deddline, setDeddline] = useState('');

    const [startTime, setStartTime] = useState('');

    const [id, setId] = useState(1);


    return (
        <>
            <input className="task-input"onBlur={(e) => setNameTask(e.target.value)} placeholder="Name Task" required/>

            <input className="task-input" type="date" onBlur={(e) => setDeddline(e.target.value)} placeholder="Deadline" required/>

            <input className="task-input" type="date" onBlur={(e) => setStartTime(e.target.value)}placeholder="Start Time" required/>

            <button className="add-task-button"
            onClick={() => {dispatch(add({ NameTask: nameTask, Deddline: deddline, StartTime: startTime, Id: id }));
            setId(id + 1);}} type="submit">Add Task</button>

        </>

    );

};