export const Checkbox = ({ name, label, className, ...props }) => {
    return (
      <div className={`flex items-center ${className}`}>
        <input 
          type='checkbox' 
          name={name} 
          className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
          id={name}
          {...props}
        />
        <label className='ml-2 text-sm text-gray-700' htmlFor={name}>
          {label}
        </label>
      </div>
    );
  };