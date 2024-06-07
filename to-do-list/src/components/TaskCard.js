import React, { useState } from 'react';
import EditTaskModal from '../modals/EditTaskModal';

const TaskCard = ({ task, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ];

    const handleDelete = () => {
        deleteTask(index);
    };

    const toggle = () => {
        setModal(!modal);
    };

    const editTask = (obj) => {
        updateListArray(obj, index);
    };

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: "10px" }}>{task.Name}</span>
                <p className="mt-3">{task.Description}</p>
                <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
                    <i className="far fa-edit mr-3" style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt" style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTaskModal modal={modal} toggle={toggle} updateTask={editTask} task={task} />
        </div>
    );
};

export default TaskCard;
