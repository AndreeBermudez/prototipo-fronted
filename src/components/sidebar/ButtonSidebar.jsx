export const ButtonSidebar = ({ titulo, Icon, isCollapsed }) => {
	return (
		<button className={`flex items-center ${isCollapsed ? 'justify-center' : ''} gap-2 w-full p-2 font-medium text-sm text-[#3A4B5B] bg-white rounded hover:bg-[#E8F2FF] hover:text-[#1F7EBE] hover:font-bold transition-colors duration-300`}>
			<Icon size={18} color='#1f7ebe'/>
			<span className={`${isCollapsed ? 'hidden' : 'block'}`}>{titulo}</span>
		</button>
	);
};
