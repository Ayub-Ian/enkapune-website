import React from "react";

function StyledInput({ type, placeholder, errors, name, register, message }) {
  return (
    <>
      {errors[name]?.message && (
        <small className="text-white after:content-['*']">
          {errors[name].message}
        </small>
      )}
      <input
        name={name}
        {...register(name, { required: message })}
        className="rounded-lg bg-white/20 py-2.5 px-5 mt-2.5 text-white placeholder:text-white backdrop-blur-xs backdrop-filter "
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}

export default StyledInput;
