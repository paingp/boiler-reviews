import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function FormAutocomplete({name, control, label, options}) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: {onChange, value} }) => (
                <Autocomplete
                    value={value ?? ''}
                    onChange={(_, data) => onChange(data)}
                    options={options}
                    getOptionLabel={(option) => option}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField style={{fontFamily:'monospace'}}
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