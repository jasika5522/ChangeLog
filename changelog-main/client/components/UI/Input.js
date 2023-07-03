import React from "react";

const Input = ({ label, placeholder, required = false, onChange }) => {
  return (
    <div className="relative flex flex-col items-start justify-start w-full gap-1">
      <p>
        {label}
        {required && (
          <span className="text-lg -translate-y-2 text-Primary">*</span>
        )}
      </p>
      <input
        type="text"
        placeholder={placeholder}
        id={label}
        onChange={onChange}
        name={label}
        className="w-full px-3 py-2 bg-gray-100 rounded-standard/4 focus:ring-2 focus:ring-Blue"
      />
    </div>
  );
};

export default Input;
