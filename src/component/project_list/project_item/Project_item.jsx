import { useState } from 'react';
import ProjectAction from '../../project_action/Project_action';
import Model from '../../shared/model/index';
import TaskForm from '../../shared/form/taskform'
import Title from '../../shared/ui/title';
import Center from '../../shared/ui/Center';
import Button from '@mui/material/Button';
import { ClockShow } from '../../shared/ui/cockdisplay'
import { useSelector } from 'react-redux';

const ProjectItem = ({ projectItem }) => {

    const events = useSelector(state => state.EventSlice.Events.filter((items) => items.projectId == projectItem.id))


    const projectId = projectItem.id
    if (!projectItem) return

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ClockShow >

            <Title >{projectItem.projectName}</Title>

            <span >Submit Date:{projectItem.date}</span>

            <Center><Button variant="outlined" onClick={handleClickOpen}>Create task</Button></Center>

            {
                events.map((item) => (
                    <li style={{ listStyle: 'none' }} key={item.id}>{item.title}</li>
                ))
            }
            {
                open ? <Model title={'Task'} open={open} handleClose={handleClose}>
                    <TaskForm projectId={projectId} create={true} handleClose={handleClose} />
                </Model> : ''
            }
            <ProjectAction state={projectItem} projectAction={true} />
        </ ClockShow>
    );
}



export default ProjectItem