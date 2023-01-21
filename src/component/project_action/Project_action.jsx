// react import
import { useState } from 'react';
import Section from '../shared/ui/section';
import Center from '../shared/ui/Center';
//mui import
import Button from '@mui/material/Button';
import Form from '../shared/form/form'
import Model from "../shared/model/index";
import { useDispatch } from 'react-redux';
import { addcase, editcase, deletecase } from '../../redux/feature/Slice';
import { generate } from 'shortid';

const ProjectAction = ({ projectAction, state }) => {


    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDispatch = (value) => {

        if (!projectAction) {
            value.id = generate()
            dispatch(addcase(value))
        } else {


            dispatch(editcase(value))
        }
    }
    const handleDelete = () => {
        dispatch(deletecase(state.id))
    }

    return (
        <Section>
            {
                projectAction ?
                    < Center>
                        <Button variant="outlined" onClick={handleClickOpen}>Edit</Button>
                        <Button variant="outlined" onClick={handleDelete}>Delete</Button>
                    </Center> :
                    <Center><Button variant="outlined" onClick={handleClickOpen}>Create</Button></Center>
            }
            {
                open ? <Model title={'Project'} handleClose={handleClose} open={open}>
                    <Form state={state} handleDispatch={handleDispatch} handleClose={handleClose} />
                </Model> : ''
            }

        </Section>
    )
}

export default ProjectAction