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
	// const imgUrl = sprites.front_default;

	return (
		// <Button
		// 	className="pokecard"
		// 	// key={name}
		// >
		// 	{pokemon.name}
		// </Button>

		<Tab className="pokecard" icon={<img src={sprites.front_default}></img>} label={name} />
	);
};

export default PokeCard;
