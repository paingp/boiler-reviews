import React from "react";
import { useForm } from "react-hook-form";

const CourseReviewForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        {/*<input defaultValue="test" {...register("example")} />*/}
        
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("instructor", { required: true })} placeholder="Instructor Name"/>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <select {...register("term")}>
            <option value="fall">Fall</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
        </select>

        {/* need to change to a select */}
        <input {...register("year", { required: true })} placeholder="Year"/>

        <input {...register("review", {required: true})}/>

        <input type="submit"/>
        </form>
    );
};

export default CourseReviewForm;