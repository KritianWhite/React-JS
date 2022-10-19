import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos los estilos
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example 1', 'Description 1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'Description 3', false, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente (Aplicamos useEffect())
    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('Tasklist component is going to unmount');
        };
    }, [tasks]);


    function completedTask(task) {
        console.log('Complete this task: ', task)

        /**
         * We update the state of the component and it will the new list of
         * tasks update the iteration of the hasks in order toshow the task update
         */
        const index = tasks.indexOf(task)
        const tmp = [...tasks]
        tmp[index].completed = !tmp[index].completed
        setTasks(tmp)
    }
    
    function deleteTask(task) {
        console.log('Delete this task: ', task)
        
        const index = tasks.indexOf(task)
        const tmp = [...tasks]
        tmp.splice(index,1)
        setTasks(tmp)
    }

    function addTasks(task) {
        console.log('Add this task: ', task)
        
        const index = tasks.indexOf(task)
        const tmp = [...tasks]
        tmp.push(task)
        setTasks(tmp)
    }

    return (
        <div>
            <div className='col-12'>
                {/**Card header (tittle) */}
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>

                    </div>
                    {/**Card body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '500px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Tittle</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/** iteraramos con map sobre una lista de tareas (que se encuentran en variables const) */}

                                { tasks.map((task, index) => { return(
                                    <TaskComponent key={ index } task={ task } complete={completedTask} remove={deleteTask}></TaskComponent>
                                ) } )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

                {/*<h1>YOUR TASKS:</h1>*/}
            {/**TODO: Aplicar un For/Map para renderizar una lista */}
            {/*<TaskComponent task={defaultTask}></TaskComponent>*/}
            
            
            <TaskForm add={addTasks}></TaskForm>
        </div>
    );
};


export default TaskListComponent;
