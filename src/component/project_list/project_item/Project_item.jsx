import { useState } from 'react';
import { Card } from '@mui/material';
import ProjectAction from '../../project_action/Project_action';
import TaskShowButton from '../../task/taskShowButton';
import Model from '../../shared/model/index';
import TaskForm from '../../shared/form/taskform'
import Title from '../../shared/ui/title';
import Center from '../../shared/ui/Center';
import Button from '@mui/material/Button';

const ProjectItem = ({ projectItem }) => {
    const projectId = projectItem.id
    if (!projectItem) return

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [allTask, setAllTask] = useState([])


    const handleAllTask = (data) => {
        setAllTask([...allTask, data])
    }

    const handleDelete = (id) => {
        const newAllTask = allTask.filter((task) => task.id !== id)
        setAllTask(newAllTask)
    }
    const editTask = (id, data) => {
        const edit = allTask.map((item) => {
            if (item.id == id) {
                item.id = data.id
                item.title = data.title
            }
            return item
        })
    }
    return (
        <Card sx={{ minWidth: 345, }} style={{ background: '#FFD495' }}>

            <Title >{projectItem.projectName}</Title>

            <div>
                <Center><Button variant="outlined" onClick={handleClickOpen}>Create task</Button></Center>
                <TaskShowButton editTask={editTask} handleDelete={handleDelete} allTask={allTask} />
                {
                    open ? <Model title={'Task'} open={open} handleClose={handleClose}>
                        <TaskForm create={true} handleAllTask={handleAllTask} handleClose={handleClose} />
                    </Model> : ''
                }
            </div>
            <ProjectAction state={projectItem} projectAction={true} />
        </Card>
    );
}



export default ProjectItem