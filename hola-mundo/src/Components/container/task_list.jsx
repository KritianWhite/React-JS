import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('my first task', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                Your task:
            </div>
            {/**TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
