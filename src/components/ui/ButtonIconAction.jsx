export const ButtonIconAction = ({ Icon, colorIcon, colorBg, children }) => {
    return (
      <button
        className={`flex gap-2 items-center justify-center p-1 rounded-lg`}
        style={{ backgroundColor: colorBg }}>
        <Icon size={16} color={colorIcon} />
        {children}
      </button>
    );
  };