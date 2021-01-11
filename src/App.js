import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PokeList from './components/PokeList';
import './styles/app.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemon: [],
		};
	}

	render() {
		return (
			<Grid className="app" container spacing={1}>
				<PokeList />
			</Grid>
		);
	}
}

export default App;
