import React from 'react';
import { Tab } from '@material-ui/core';
import '../styles/pokecard.css';

const PokeCard = (props) => {
	const { pokemon, onClick } = props;

	const { name, sprites } = pokemon;

	if (!sprites) {
		return <Tab className="pokecard" label="...Loading Pkmn" />;
	} else {
		return (
			<Tab
				className="pokecard"
				icon={<img src={sprites.front_default} alt="sprite"></img>}
				label={name}
				onClick={() => onClick(pokemon)}
			/>
		);
	}
};

export default PokeCard;
