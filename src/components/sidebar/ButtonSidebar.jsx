export const ButtonSidebar = ({ titulo, Icon }) => {
	return (
		<button className='d-flex align-items-center justify-content-center gap-2 btn_sidebar'>
			<Icon size={18} color='#1f7ebe' className='icon' />
			<span>{titulo}</span>
		</button>
	);
};
