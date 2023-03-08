import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function FTextField({name, control, label, required = false}) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: {onChange, value} }) => (
                <TextField
                    name={name}
                    value={value ?? ''}
                    onChange={onChange}
                    required={required}
                    label={label}
                    variant="filled"
                    fullWidth
                />
            )}
        />
    )
}

export default FTextField
