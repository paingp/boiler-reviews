import { Typography, Rating } from "@mui/material";
import { Controller } from "react-hook-form";

function FormRating({name, control, label}) {
    return (
        <div>
            <Typography style={{fontFamily:'monospace'}} component="legend">{label}</Typography>
            <Controller
                name={name}
                control={control}
                rules={{required: true}}
                render={({ field: { onChange, value } }) => (
                    <Rating
                        name={name}
                        onChange={onChange}
                        value={Number(value)}
                        size="large"
                        precision={0.5}
                    />
                )}
            />
        </div>
    )
};

export default FormRating;