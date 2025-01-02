export const SelectField = ({ name, options, className, ...props }) => {
    return (
      <select
        name={name}
        className={`border border-gray-300 rounded-md px-3 py-2 w-full text-sm ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };