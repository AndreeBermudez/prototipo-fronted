export const InputEmail = ({name, placeholder, className, domain = "@gmail.com", ...props }) => {
    return (
      <div className={`flex w-full text-sm ${className}`}>
        <input
          type='text'
          name={name}
          placeholder={placeholder}
          className='w-[60%] px-3 py-2 border border-r-0 rounded-l-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
          {...props}
        />
        <div className="w-[40%] px-3 py-2 border border-l-0 rounded-r-md bg-gray-100 overflow-hidden">{domain}
        </div>
      </div>
    );
  };