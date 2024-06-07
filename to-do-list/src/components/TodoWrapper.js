import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import TaskCard from './TaskCard';

const TodoWrapper = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList");
        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    const deleteTask = (index) => {
        let tempList = [...taskList];
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
    };

    const updateListArray = (obj, index) => {
        let tempList = [...taskList];
        tempList[index] = obj;
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload()
    };

    const toggle = () => {
        setModal(!modal);
    };

    const saveTask = (task) => {
        let tempList = [...taskList];
        tempList.push(task);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false);
    };

    return (
        <>
            <div className='header text-center p-5'>
                <h3> Todo List</h3>
                <button className='btn btn-primary' onClick={toggle}>Add Task</button>
            </div>
            <div className='tasks-wrapper'>
                {taskList && taskList.map((obj, index) => 
                    <TaskCard 
                        task={obj} 
                        index={index} 
                        deleteTask={deleteTask} 
                        updateListArray={updateListArray}  // Przekazanie poprawnej funkcji
                    />
                )}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
}

export default TodoWrapper;
