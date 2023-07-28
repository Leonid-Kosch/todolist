import { completeTask, removeTask } from "../store";

function TaskItem(props) {
    function removeTaskButtonClick (e) {
        removeTask(e.target.parentNode.parentNode.id);
    };
    function completeTaskButtonClick (e) {
        completeTask(e.target.parentNode.parentNode.id);
    };
    return ( 
        <div className={props.status} id={props.id} key={props.id}>
            <h2>{props.name}</h2>
            <div>
                <button onClick={removeTaskButtonClick}>❌</button>
                <button onClick={completeTaskButtonClick}>✔️</button>
            </div>
        </div>
    );
}

export default TaskItem;