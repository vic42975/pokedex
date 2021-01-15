import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import '../styles/pokeview.css';

const PokeView = (props) => {
	const {
		selectedPokemon: { id, name, sprites, types },
	} = props;

	let loadData = '';

	if (!id) {
		loadData = (
			<Card>
				<CardMedia className="sprite-image" img="" title="none" />
				<CardContent className="data-wrapper">
					<Typography component="h2" variant="h5" className="data-name">
						No Pokemon Selected
					</Typography>
				</CardContent>
			</Card>
		);
	} else {
		const imgUrl = sprites.front_default;
		const pokemonType = types.map((type) => type.type.name);

		loadData = (
			<Card>
				<CardMedia className="sprite-image" image={imgUrl} title={`${name}`} />
				<CardContent className="data-wrapper">
					<Typography component="h2" variant="h5" className="data-name">
						{name.toUpperCase()}
					</Typography>
					<Typography component="p" variant="body2" color="textSecondary" className="data-char">
						{pokemonType.map((type) => {
							return type.toUpperCase() + ' ';
						})}
					</Typography>
				</CardContent>
			</Card>
		);
	}

	return (
		<Grid item className="pokeview">
			{loadData}
		</Grid>
	);
};

export default PokeView;
