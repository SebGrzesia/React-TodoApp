import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskModal = ({ modal, toggle, updateTask, task }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "taskName") {
            setTaskName(value);
        } else {
            setTaskDescription(value);
        }
    };

    useEffect(() => {
        setTaskName(task.Name);
        setTaskDescription(task.Description);
    }, [task]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempTask = {};
        tempTask["Name"] = taskName;
        tempTask["Description"] = taskDescription;
        updateTask(tempTask);
    };

    return (
        <Modal isOpen={modal} toggle={toggle} className="custom-modal">
            <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                    </div>
                    <div className="form-group mt-1">
                        <label>Description</label>
                        <textarea rows="6" className="form-control" value={taskDescription} onChange={handleChange} name="description"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>
                    Edit
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditTaskModal;
