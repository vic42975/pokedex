import React, { useState, useEffect } from 'react';
import { Button, Tab } from '@material-ui/core';
import '../styles/pokecard.css';
import { fetchPokemon } from '../api';

const PokeCard = (props) => {
	const { pokemon } = props;

	const [fetchData, setFetchedData] = useState({});

	useEffect(() => {
		const fetchAPI = async () => {
			const pokemonData = await fetchPokemon(pokemon.name);
			setFetchedData(pokemonData);
		};

		fetchAPI();
	}, [setFetchedData]);

	const { id, name, sprites, types } = fetchData;

	if (!sprites) {
		return <Tab className="pokecard" label="...Loading Pkmn" />;
	} else {
		return <Tab className="pokecard" icon={<img src={sprites.front_default}></img>} label={name} />;
	}
};

export default PokeCard;
