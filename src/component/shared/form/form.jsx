import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Label from '../ui/label'
import TextInput from '../ui/textInput';
import ErrorMessage from '../ui/errorMessageDiv';
import Container from '../ui/container';

import { useState } from 'react'

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Form = ({ handleClose, handleDispatch, state }) => {

    const [value, setValue] = useState(null);

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: "onSubmit",
        defaultValues: state
    });


    const handleChange = (newValue) => {
        setValue(newValue.toString())
    };

    const onSubmit = (data) => {
        data.date = value
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            value={value}
                            onChange={handleChange}
                            inputFormat="MM/DD/YYYY"
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
                {errors.date?.type === 'required' && <ErrorMessage role="alert"> Date is required</ErrorMessage>}

                <Button >
                    <TextInput variant="outlined" type="submit" />
                </Button>

            </form>
        </Container>
    )
}

export default Form