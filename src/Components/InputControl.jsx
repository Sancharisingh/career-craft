import React from 'react';

function InputControl({label, ...props }) {
  return (
    <div className="Label mb-4 w-full">
      {label && <label className="block mb-2 mt-3 font-bold text-gray-400">{label}</label>}
      <input
        type="text"
        className="InputLabel w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        {...props}
      />
    </div>
  );
}

export default InputControl;
