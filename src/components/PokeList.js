import React from 'react';
import { Grid } from '@material-ui/core';
import PokeCard from './PokeCard';

import '../styles/pokelist.css';

const PokeList = (props) => {
	const fetchedPokedex = props.pokedex;

	let displayList = '';

	if (!fetchedPokedex) {
		displayList = <p>...Loading</p>;
	} else {
		displayList = fetchedPokedex.map((pokemon, i) => {
			return <PokeCard key={i} id={i} pokemon={pokemon} onClick={props.onClick} />;
		});
	}

	// take the list
	// for every pokemon, display pokemon name

	// if fetchedPokedex API request not fullfilled -> show loading
	// if data has been fetched, then map thru array
	return (
		<Grid item className="pokelist">
			{displayList}
		</Grid>
	);
};

export default PokeList;
