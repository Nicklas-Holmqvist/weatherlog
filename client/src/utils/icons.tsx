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

export const Fog = () => {
	return <img src={fog} alt="Dimma"></img>;
};

export const Hail = () => {
	return <img src={hail} alt="Hagel"></img>;
};

export const Overcast = () => {
	return <img src={overcast} alt="Mulet"></img>;
};

export const Rain = () => {
	return <img src={rain} alt="Regn"></img>;
};

export const RainShower = () => {
	return <img src={rainShower} alt="Regnskur"></img>;
};

export const SemiClear = () => {
	return <img src={semiClear} alt="Halvklart"></img>;
};

export const SnowShower = () => {
	return <img src={snowShower} alt="Snöby"></img>;
};

export const Snowfall = () => {
	return <img src={snowfall} alt="Snöfall"></img>;
};

export const SnowyRain = () => {
	return <img src={snowyRain} alt="Snöblandat regn"></img>;
};

export const Sun = () => {
	return <img src={sun} alt="Sol"></img>;
};

export const Thunder = () => {
	return <img src={thunder} alt="Åska"></img>;
};
