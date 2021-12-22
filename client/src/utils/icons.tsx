import fog from '../icons/fog.svg';
import hail from '../icons/hail.svg';
import overcast from '../icons/overcast.svg';
import rain from '../icons/rain.svg';
import rainShower from '../icons/rain-shower.svg';
import semiClear from '../icons/semi-clear.svg';
import snowShower from '../icons/snow-shower.svg';
import snowfall from '../icons/snowfall.svg';
import snowyRain from '../icons/snowy-rain.svg';
import sun from '../icons/sun.svg';
import thunder from '../icons/thunder.svg';

interface IIcon {
	className?: string;
}

export const Fog = ({ className }: IIcon) => {
	return <img className={className} src={fog} alt="Dimma"></img>;
};

export const Hail = ({ className }: IIcon) => {
	return <img className={className} src={hail} alt="Hagel"></img>;
};

export const Overcast = ({ className }: IIcon) => {
	return <img className={className} src={overcast} alt="Mulet"></img>;
};

export const Rain = ({ className }: IIcon) => {
	return <img className={className} src={rain} alt="Regn"></img>;
};

export const RainShower = ({ className }: IIcon) => {
	return <img className={className} src={rainShower} alt="Regnskur"></img>;
};

export const SemiClear = ({ className }: IIcon) => {
	return <img className={className} src={semiClear} alt="Halvklart"></img>;
};

export const SnowShower = ({ className }: IIcon) => {
	return <img className={className} src={snowShower} alt="Snöby"></img>;
};

export const Snowfall = ({ className }: IIcon) => {
	return <img className={className} src={snowfall} alt="Snöfall"></img>;
};

export const SnowyRain = ({ className }: IIcon) => {
	return (
		<img className={className} src={snowyRain} alt="Snöblandat regn"></img>
	);
};

export const Sun = ({ className }: IIcon) => {
	return <img className={className} src={sun} alt="Sol"></img>;
};

export const Thunder = ({ className }: IIcon) => {
	return <img className={className} src={thunder} alt="Åska"></img>;
};
