import { InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function ReviewInput({name, control, formlabel, label, required = false, rows}) {
    return (
        <div>
            <InputLabel>{formlabel}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field: {onChange, value} }) => (
                    <TextField
                        name={name}
                        label={label}
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
