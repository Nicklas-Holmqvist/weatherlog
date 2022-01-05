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

import wind from '../icons/wind.svg';

import noData from '../icons/no-data.svg';

import n from '../icons/n.svg';
import nw from '../icons/nw.svg';
import w from '../icons/w.svg';
import sw from '../icons/sw.svg';
import s from '../icons/s.svg';
import se from '../icons/se.svg';
import e from '../icons/e.svg';
import ne from '../icons/ne.svg';

import menu from '../icons/menu.svg';

import cold from '../icons/cold.svg';
import cool from '../icons/cool.svg';
import neutral from '../icons/neutral.svg';
import mild from '../icons/mild.svg';
import warm from '../icons/warm.svg';

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

export const North = ({ className }: IIcon) => {
	return <img className={className} src={n} alt="Nordlig"></img>;
};

export const NorthWest = ({ className }: IIcon) => {
	return <img className={className} src={nw} alt="Nordvästlig"></img>;
};

export const West = ({ className }: IIcon) => {
	return <img className={className} src={w} alt="Västlig"></img>;
};

export const SouthWest = ({ className }: IIcon) => {
	return <img className={className} src={sw} alt="Sydvästlig"></img>;
};

export const South = ({ className }: IIcon) => {
	return <img className={className} src={s} alt="Sydlig"></img>;
};

export const SouthEast = ({ className }: IIcon) => {
	return <img className={className} src={se} alt="Sydöstlig"></img>;
};

export const East = ({ className }: IIcon) => {
	return <img className={className} src={e} alt="Östlig"></img>;
};

export const NorthEast = ({ className }: IIcon) => {
	return <img className={className} src={ne} alt="Nordöstlig"></img>;
};

export const MenuIcon = ({ className }: IIcon) => {
	return <img className={className} src={menu} alt="Meny"></img>;
};

export const ColdBar = ({ className }: IIcon) => {
	return <img className={className} src={cold} alt="Kylig"></img>;
};
export const CoolBar = ({ className }: IIcon) => {
	return <img className={className} src={cool} alt="Sval"></img>;
};
export const NeutralBar = ({ className }: IIcon) => {
	return <img className={className} src={neutral} alt="Behaglig"></img>;
};
export const MildBar = ({ className }: IIcon) => {
	return <img className={className} src={mild} alt="Mild"></img>;
};
export const WarmBar = ({ className }: IIcon) => {
	return <img className={className} src={warm} alt="Varm"></img>;
};

export const Wind = ({ className }: IIcon) => {
	return <img className={className} src={wind} alt="Vind"></img>;
};
export const NoData = ({ className }: IIcon) => {
	return <img className={className} src={noData} alt="Ingen data"></img>;
};
