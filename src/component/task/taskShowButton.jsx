import { useState } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TaskItem from './taskItem'

import Section from '../shared/ui/section';

const TaskShowButton = ({ allTask, handleDelete, editTask }) => {


    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Section inputMargin='1rem'>
            <List
                sx={{
                    width: '100%', maxWidth: 360, bgcolor: '#FFFBAC'
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Task Show" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <TaskItem handleDelete={handleDelete} editTask={editTask} allTask={allTask} />
                    </List>
                </Collapse>
            </List>
        </Section>
    );
}

export default TaskShowButton