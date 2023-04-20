import React from "react";
const Checkbox = ({
  id,
  name,
  label,
  helpText,
  checked,
  disabled,
  onChange,
}) => {
  const handleClick = (e) => {
    if (disabled) return;

    // Prevents double event firing
    e.preventDefault();
    e.stopPropagation();

    onChange({ target: { checked: !checked } });
  };

  return (
    <div className="flex flex-row gap-8px items-center">
      <div
        onClick={handleClick}
        className={`w-20px h-20px min-w-[20px] min-h-[20px] flex justify-center items-center rounded-4px border transition ease-in ${
          disabled
            ? "bg-fill-disabled cursor-not-allowed"
            : checked
            ? "bg-primary-base border-primary-base cursor-pointer"
            : "bg-fill-default border-outline-default  hover:bg-primary-muted cursor-pointer"
        } ${helpText ? "mb-16px" : ""}`}
      >
        <span
          className={`text-[16px] ${
            disabled ? "text-copy-disabled" : "text-white"
          } font-semibold w-full h-full flex items-center transition-all ease-in duration-75 justify-center ${
            checked ? "scale-1" : "scale-50"
          }`}
        >
          {checked ? <i className="ri-check-fill"></i> : ""}
        </span>

        <input
          type="checkbox"
          id={id}
          name={name}
          value={label}
          checked={checked}
          onChange={handleClick}
          disabled={disabled}
          hidden
        />
      </div>
      <div className={`flex flex-col ${helpText ? "gap-4px" : ""}`}>
        <label
          htmlFor={id}
          className={`text-body font-medium select-none ${
            disabled
              ? "text-copy-disabled cursor-not-allowed"
              : "text-copy-caption cursor-pointer"
          }`}
        >
          {label ? label : "Checkbox"}
        </label>
        <span className="flex flex-row gap-4px text-body text-gray-800">
          {helpText}
        </span>
      </div>
    </div>
  );
};

export default Checkbox;