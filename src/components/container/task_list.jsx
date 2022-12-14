import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//importamos  la hoja de estilos de  task.scss
import '../../styles/task.scss'

const TaskListComponent = () => {
    const defaultTask = new Task ('Example','Default description', false, LEVELS.NORMAL)

//Estado del Componente
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been Modified')
        setLoading(false); 
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
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
