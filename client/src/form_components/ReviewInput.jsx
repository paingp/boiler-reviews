import { InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function ReviewInput({name, control, label, required = false, rows}) {
    return (
        <div>
            <InputLabel>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: {onChange, value} }) => (
                    <TextField
                        name={name}
                        value={value ?? ''}
                        onChange={onChange}
                        required={required}
                        multiline
                        rows={rows}
                        variant="filled"
                        fullWidth
                    />
                )}
            />
        </div>
    )
}

export default ReviewInput
