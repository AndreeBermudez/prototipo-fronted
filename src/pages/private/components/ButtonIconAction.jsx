export const ButtonIconAction = ({ Icon, colorIcon, colorBg, children, ...props }) => {
    return (
      <button
        className={`flex gap-2 items-center justify-center p-1 rounded-lg`}
        style={{ backgroundColor: colorBg }}
        {...props}>
        <Icon size={16} color={colorIcon} />
        {children}
      </button>
    );
  };