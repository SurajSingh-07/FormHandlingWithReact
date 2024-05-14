import React from "react";
import { useForm } from "react-hook-form";

function Form({handleFormSubmitData}) {
  const {register, handleSubmit, reset} = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  }

  return (
    <>
      <div className="w-full flex items-center justify-center mt-10">
        <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} className="px-2 rounded outline-none font-semibold m-1" type="text" placeholder="Name" />
            <input {...register('email')} className="px-2 rounded outline-none font-semibold m-1" type="text" placeholder="Email" />
            <input {...register('image')} className="px-2 rounded outline-none font-semibold m-1" type="text" placeholder="Image URL" />
            <input  className="bg-blue-700 text-white font-semibold px-3 ml-2 rounded-md text-sm py-1" type="Submit" />
        </form>
      </div>
    </>
  );
}

export default Form;
