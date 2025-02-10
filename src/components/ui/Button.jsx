export const Button = ({ children, className, ...props }) => {
    return (
      <button
        className={`text-sm font-bold py-2 px-4 rounded flex items-center justify-center gap-2 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };