import './App.css';
import TaskItem from './components/TaskItem';
import store, { addTask } from './store.js';

function App() {
  let taskItems = store.taskList.map((item) => {
   return <TaskItem id={item.id} name={item.name} status={item.status} key={item.id}/>
  })
  function newTaskButtonClick (e) {
    let input = e.target.parentNode.querySelector('input');
    if (input.value != '') {
      addTask(input.value);
      input.value = '';
    }
  };
  return (
    <div className="App">
      <h1>
        Спсок дел
      </h1>
      <div className='inputTask'>
        <input></input>
        <button onClick={newTaskButtonClick}>+</button>
      </div>
      <div className='taskList'>
        {taskItems}
      </div>
    </div>
  );
}

export default App;
