import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import '../styles/pokelist.css';
import PokeCard from './PokeCard';
import { fetchPokedex } from '../api';

const PokeList = () => {
	const [fetchedPokedex, setFetchedPokedex] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			const PokemonList = await fetchPokedex();
			setFetchedPokedex(PokemonList);
		};

		fetchAPI();
	}, [setFetchedPokedex]);

	// take the list
	// for every pokemon, display pokemon name
	return (
		<Grid className="pokelist" container>
			{fetchedPokedex.map((pokemon, i) => {
				// console.log(pokemon, i);
				return <PokeCard key={i} id={i} pokemon={pokemon} />;
			})}
		</Grid>
	);
};

export default PokeList;
