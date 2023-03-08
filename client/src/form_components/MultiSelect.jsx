import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function MultiSelect({name, control, label, options}) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: {onChange, value} }) => (
                <Autocomplete
                    value={value ?? []}
                    onChange={(_, data) => onChange(data)}
                    multiple
                    options={options}
                    getOptionLabel={(option) => option}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            variant="filled"
                        />
                    )}
                />
            )}
        />
    )
}

export default MultiSelect