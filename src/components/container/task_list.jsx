import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task ('Example','Default description', false, LEVELS.NORMAL)

    const changeState = (id) => {
        console.log('cambiar estado de tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* TO DO: Aplicar un For/Map para renderizar una lista (repetir una linea html varias veces) */}
            <TaskComponent task = { defaultTask }> </TaskComponent>
        </div>
    );
};




export default TaskListComponent;
