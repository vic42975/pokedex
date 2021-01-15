import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PokeList from './components/PokeList';
import PokeView from './components/PokeView';
import './styles/app.css';
import './styles/pokeview.css';

import { fetchPokedex, fetchPokemon } from './api';

class App extends Component {
	constructor() {
		super();
		this.state = {
			pokedex: [],
			selectedPokemon: {},
		};

		this.handleOnClick = this.handleOnClick.bind(this);
	}

	async componentDidMount() {
		const fetchedPokedex = await fetchPokedex();
		const names = fetchedPokedex.map((pokemon) => pokemon.name);
		const fetchedPokemon = await Promise.all(
			names.map(async (pokemon) => {
				return await fetchPokemon(pokemon);
			})
		);

		this.setState((prevState) => ({
			...prevState,
			pokedex: fetchedPokemon,
		}));
	}

	handleOnClick(clickedData) {
		this.setState((prevState) => ({
			...prevState,
			selectedPokemon: clickedData,
		}));
	}

	render() {
		return (
			<Grid container className="app" spacing={1}>
				<PokeList pokedex={this.state.pokedex} onClick={this.handleOnClick} />
				<PokeView selectedPokemon={this.state.selectedPokemon} />
			</Grid>
		);
	}
}

export default App;
