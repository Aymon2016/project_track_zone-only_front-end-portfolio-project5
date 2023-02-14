
import Button from '@mui/material/Button';
import { generate } from 'shortid';
import { useForm } from "react-hook-form";
import Label from '../ui/label'
import TextInput from '../ui/textInput';
import ErrorMessage from '../ui/errorMessageDiv';
import Container from '../ui/container';
import { useDispatch } from 'react-redux';
import { addcase } from '../../../redux/feature/EventSlice'
const TaskForm = ({ create, handleClose, projectId }) => {

    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm({

        defaultValues: {
            id: '',
            title: '',
            projectId: projectId
        }
    });



    const onSubmit = (data) => {
        if (create) {
            data.id = generate()
            dispatch(addcase(data))
        }
        handleClose()
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label>Task Form</Label>
                <TextInput
                    {...register("title", { required: true })}
                    aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title?.type === 'required' && <ErrorMessage role="alert"> Project Name is required</ErrorMessage>}
                <Button>
                    <TextInput type="submit" />
                </Button>

            </form>
        </Container>
    )
}

export default TaskForm