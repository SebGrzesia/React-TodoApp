import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = useState("");
    const [tastDescription, setModalDescription] = useState("");

    const handleChange = (e) => {

        const{name, value} = e.target

        if(name === "taskName") {
            setTaskName(value)
        }else{
            setModalDescription(value)
        }
    }

    const handleSaveTask = () => {
        let task = {}
        task["Name"] = taskName
        task["Description"] = tastDescription
        save(task)
    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} className="custom-modal">
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Task Name</label>
                            <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
                        </div>
                        <div className="form-group mt-1" >
                            <label>Description</label>
                            <textarea rows= "6" className="form-control" value={tastDescription} onChange={handleChange} name="description"></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSaveTask}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default CreateTask;
