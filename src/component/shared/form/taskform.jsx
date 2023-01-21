
import Button from '@mui/material/Button';
import { generate } from 'shortid';
import { useForm } from "react-hook-form";
import Label from '../ui/label'
import TextInput from '../ui/textInput';
import ErrorMessage from '../ui/errorMessageDiv';
import Container from '../ui/container';

const TaskForm = ({ create, handleClose, taskId, handleAllTask }) => {


    const { register, formState: { errors }, handleSubmit } = useForm({

        defaultValues: {
            id: '',
            title: '',
        }
    });



    const onSubmit = (data) => {

        if (create) {
            data.id = generate()
            handleAllTask(data)
        } else {
            states.id = taskId
            handleAllTask(taskId, data)
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