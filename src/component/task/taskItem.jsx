import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Model from '../shared/model/index';
import TaskForm from '../shared/form/taskform'
import Button from '@mui/material/Button';

const TaskItem = ({ allTask, handleDelete, editTask }) => {

    if (!allTask) return

    const [open, setOpen] = useState(false);
    const [oneTaskId, setOneTaskId] = useState(null)
    const handleClickOpen = (id) => {

        setOpen(true);
        setOneTaskId(id)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [checked, setChecked] = useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };


    return (
        <div>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: '#FFFBAC' }}>
                {allTask.map((value) => {

                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={value.id}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value)}
                                    checked={checked.indexOf(value) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText id={labelId} primary={value.title} />
                                <Button onClick={() => handleDelete(value.id)}>Delete</Button>
                                <Button onClick={() => handleClickOpen(value.id)}>edit</Button>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            {
                open ? <Model title={'Task'} open={open} handleClose={handleClose}>
                    <TaskForm taskId={oneTaskId} create={false} handleAllTask={editTask} handleClose={handleClose} />
                </Model> : ''
            }
        </div>
    )
}

export default TaskItem