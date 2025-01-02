import logoMunicipalidad from '../../assets/logo-municipalidad.svg';

export const Logo = ({ className }) => {
	return (
		<img
			src={logoMunicipalidad}
			alt='Logo Municipalidad'
			className={`w-auto h-16 ${className}`}
		/>
	);
};
