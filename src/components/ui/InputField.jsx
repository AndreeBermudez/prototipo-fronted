export const InputField = ({ type = "text", name, placeholder, label, className, ...props }) => {
    return (
      <div className={`space-y-2 w-full text-xs sm:text-sm ${className}`}>
        {label && <label className='block font-bold text-gray-700'>{label}</label>}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200'
          {...props}
        />
      </div>
    );
  };