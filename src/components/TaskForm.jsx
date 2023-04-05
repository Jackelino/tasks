import { useSelector } from "react-redux";

export const TaskForm = function() {
    const taskState = useSelector (state => state.task);
    console.log(taskState)
    return(
        <div>
            <h1>Task Form</h1>
        </div>
    );
}