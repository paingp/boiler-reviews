import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

function Dropdown({name, control, label, options, required = false, width = 120}) {
    return (
        <FormControl required={required} variant="filled" sx={{width}}>
            <InputLabel variant="filled">{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                default={""}
                render={({ field: {onChange, value} }) => (
                    <Select label={label} onChange={onChange} value={value ?? ''}>
                        {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                        ))}
                    </Select>
                )}
            />
        </FormControl>
    )
}

export default Dropdown