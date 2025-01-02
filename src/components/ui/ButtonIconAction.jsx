export const ButtonIconAction = ({ Icon, colorIcon, colorBg }) => {
    return (
      <button
        className={`flex items-center justify-center p-1 rounded-lg`}
        style={{ backgroundColor: colorBg }}>
        <Icon size={16} color={colorIcon} />
      </button>
    );
  };