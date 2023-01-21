import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Label from '../ui/label'
import TextInput from '../ui/textInput';
import ErrorMessage from '../ui/errorMessageDiv';
import Container from '../ui/container';
const Form = ({ handleClose, handleDispatch, state }) => {


    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: "onSubmit",
        defaultValues: state
    });



    const onSubmit = (data) => {

        handleDispatch(data)
        handleClose()

    }




    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label>Project Name</Label>
                <TextInput
                    {...register("projectName", { required: true })}
                    aria-invalid={errors.projectName ? "true" : "false"}
                />
                {errors.projectName?.type === 'required' && <ErrorMessage role="alert"> Project Name is required</ErrorMessage>}

                <Label>Project Date</Label>
                <TextInput
                    {...register("date", { required: true })}
                    aria-invalid={errors.date ? "true" : "false"}
                />
                {errors.date?.type === 'required' && <ErrorMessage role="alert"> Date is required</ErrorMessage>}

                <Button >
                    <TextInput variant="outlined" type="submit" />
                </Button>

            </form>
        </Container>
    )
}

export default Form